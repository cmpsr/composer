import React, { FC, useCallback, useRef, useState } from 'react';
import { MarkdownEditorContextValue, MarkdownEditorProps, TextMode } from './types';
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
import { $createParagraphNode, $createTextNode, $getRoot, LexicalEditor } from 'lexical';
import { $convertFromMarkdownString, $convertToMarkdownString } from '@lexical/markdown';

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

export const MarkdownEditorContext = React.createContext<MarkdownEditorContextValue>({
  textMode: TextMode.RichText,
  toggleTextMode: () => {},
});

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
  textMode: initialTextMode = TextMode.RichText,
}) => {
  const editorRef = useRef<LexicalEditor>(null);
  const [textMode, setTextMode] = useState<TextMode>(initialTextMode);
  const TextPlugin = textMode === TextMode.RichText ? RichTextPlugin : PlainTextPlugin;

  const toggleTextMode = useCallback(() => {
    setTextMode((currentTextMode) => {
      const isRichTextModeOn = currentTextMode === TextMode.RichText;

      editorRef.current?.update(() => {
        const root = $getRoot();

        if (isRichTextModeOn) {
          const markdown = $convertToMarkdownString(PLAYGROUND_TRANSFORMERS, root);
          root.clear().append($createParagraphNode().append($createTextNode(markdown)));
        } else {
          console.log('parsing root content to rich text markdown', root.getTextContent());
          $convertFromMarkdownString(root.getTextContent(), PLAYGROUND_TRANSFORMERS, root);
        }

        root.selectStart();
      });

      return isRichTextModeOn ? TextMode.PlainText : TextMode.RichText;
    });
  }, [setTextMode]);

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
        <MarkdownEditorContext.Provider value={{ textMode, toggleTextMode }}>
          <ToolbarPlugin
            isDisabled={isReadonly}
            externalActions={externalToolbarActions}
            toolbarPluginProps={toolbarPluginProps}
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
            <FloatingLinkEditorPlugin />
            <SetInitialValuePlugin value={initialValue} version={initialValueVersion} textMode={textMode} />
            <OnChangeMarkdown
              onChange={onChange}
              transformers={PLAYGROUND_TRANSFORMERS}
              debounceTime={onChangeDebounceInterval}
            />

            {textMode === TextMode.RichText && (
              <>
                <CodeHighlightPlugin />
                <ListPlugin />
                <LinkPlugin />
                <AutoLinkPlugin />
                <ListMaxIndentLevelPlugin maxDepth={7} />
                <MarkdownShortcutPlugin />
              </>
            )}
          </Box>
        </MarkdownEditorContext.Provider>
      </Box>
    </LexicalComposer>
  );
};
