import React, { FC, useCallback, useRef, useState } from 'react';
import { MarkdownEditorProps, EditorMode } from './types';
import { Box } from '@cmpsr/components';

import { defaultTheme } from './themes/defaultTheme';
import { Placeholder } from './components/Placeholder';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { $createParagraphNode, $createTextNode, $getRoot, LexicalEditor } from 'lexical';
import { $convertFromMarkdownString, $convertToMarkdownString } from '@lexical/markdown';

import { OnChangeMarkdown } from './plugins/OnChangeMarkdown';
import { CodeHighlightPlugin } from './plugins/CodeHighlightPlugin';
import { AutoLinkPlugin } from './plugins/AutoLinkPlugin';
import { LinkPlugin } from './plugins/LinkPlugin';
import { ReadOnlyPlugin } from './plugins/ReadOnlyPlugin';
import { ListMaxIndentLevelPlugin } from './plugins/ListMaxIndentLevelPlugin';
import { ToolbarPlugin } from './plugins/ToolbarPlugin';
import { FloatingLinkEditorPlugin } from './plugins/FloatingLinkEditorPlugin';
import { MarkdownShortcutPlugin } from './plugins/MarkdownShortcutPlugin';
import { PLAYGROUND_TRANSFORMERS } from './plugins/MarkdownTransformers';
import { SetInitialValuePlugin } from './plugins/SetInitialValuePlugin';

import './styles';
import { DISCARD_HISTORY_CANDIDATE } from './constants';

const editorConfig = {
  theme: defaultTheme,
  namespace: 'cmpsr-markdown-editor',
  onError: (error: Error) => {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    HorizontalRuleNode,
  ],
};

export const MarkdownEditor: FC<MarkdownEditorProps> = ({
  initialValue,
  onChange,
  placeholder = 'Start typing here...',
  isReadonly,
  borderRadius = '0.5rem',
  maxWidth = '100%',
  color = 'text-primary',
  backgroundColor = 'background-container-default',
  border = '1px solid',
  borderColor = 'ui-element-outline-default',
  height = '17rem',
  minHeight = '12rem',
  width = '38rem',
  initialValueVersion,
  onChangeDebounceInterval,
  toolbarPluginProps,
  containerProps,
  contentProps,
  contentEditableStyles,
  externalToolbarActions,
  editorMode: initialEditorMode = EditorMode.RichText,
}) => {
  const editorRef = useRef<LexicalEditor>(null);
  const [editorMode, setEditorMode] = useState<EditorMode>(initialEditorMode);
  const TextPlugin = editorMode === EditorMode.RichText ? RichTextPlugin : PlainTextPlugin;

  const toggleEditorMode = useCallback(() => {
    setEditorMode((currentEditorMode) => {
      const isRichEditorModeOn = currentEditorMode === EditorMode.RichText;
      const updateOptions = {
        tag: DISCARD_HISTORY_CANDIDATE,
      };

      editorRef.current?.update(() => {
        const root = $getRoot();

        if (isRichEditorModeOn) {
          const markdown = $convertToMarkdownString(PLAYGROUND_TRANSFORMERS, root);
          root.clear().append($createParagraphNode().append($createTextNode(markdown)));
        } else {
          $convertFromMarkdownString(root.getTextContent(), PLAYGROUND_TRANSFORMERS, root);
        }

        root.selectStart();
      }, updateOptions);

      return isRichEditorModeOn ? EditorMode.PlainText : EditorMode.RichText;
    });
  }, [setEditorMode]);

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <Box
        borderRadius={borderRadius}
        maxWidth={maxWidth}
        color={color}
        position="relative"
        lineHeight="1.25rem"
        fontWeight="400"
        textAlign="left"
        border={border}
        borderColor={borderColor}
        width={width}
        {...containerProps}
      >
        <ToolbarPlugin
          isDisabled={isReadonly}
          externalActions={externalToolbarActions}
          toolbarPluginProps={toolbarPluginProps}
          editorMode={editorMode}
          toggleEditorMode={toggleEditorMode}
        />
        <Box backgroundColor={backgroundColor} position="relative" width="100%" {...contentProps}>
          <EditorRefPlugin editorRef={editorRef} />
          <TextPlugin
            contentEditable={
              <ContentEditable
                style={{
                  height,
                  minHeight,
                  resize: 'vertical',
                  fontSize: '1rem',
                  position: 'relative',
                  tabSize: 1,
                  outline: 0,
                  padding: '1rem 0.75rem',
                  caretColor: 'text-secondary',
                  overflow: 'auto',
                  fontStyle: '',
                  width: '100%',
                  maxWidth,
                  ...contentEditableStyles,
                }}
              />
            }
            placeholder={<Placeholder>{placeholder}</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <ReadOnlyPlugin isReadonly={isReadonly} />
          <SetInitialValuePlugin value={initialValue} version={initialValueVersion} editorMode={editorMode} />
          <OnChangeMarkdown
            debounceTime={onChangeDebounceInterval}
            onChange={onChange}
            transformers={PLAYGROUND_TRANSFORMERS}
          />

          {editorMode === EditorMode.RichText && (
            <>
              <CodeHighlightPlugin />
              <ListPlugin />
              <LinkPlugin />
              <AutoLinkPlugin />
              <ListMaxIndentLevelPlugin maxDepth={7} />
              <MarkdownShortcutPlugin />
              <FloatingLinkEditorPlugin />
            </>
          )}
        </Box>
      </Box>
    </LexicalComposer>
  );
};
