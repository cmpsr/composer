import React, { FC } from 'react';
import { MarkdownEditorProps } from './types';
import { Box } from '@cmpsr/components';

import { defaultTheme } from './themes/defaultTheme';
import { Placeholder } from './components/Placeholder';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
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
  editorContainerProps,
  editorContentProps,
  externalToolbarActions,
  contentEditableId = 'cmpsr-markdown-editor-content-editable',
}) => {
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
        {...editorContainerProps}
      >
        <ToolbarPlugin
          isDisabled={isReadonly}
          externalActions={externalToolbarActions}
          toolbarPluginProps={toolbarPluginProps}
        />
        <Box backgroundColor={backgroundColor} position="relative" width="100%" {...editorContentProps}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                id={contentEditableId}
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
                }}
              />
            }
            placeholder={<Placeholder>{placeholder}</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />

          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <ReadOnlyPlugin isReadonly={isReadonly} />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin />
          <OnChangeMarkdown
            debounceTime={onChangeDebounceInterval}
            onChange={onChange}
            transformers={PLAYGROUND_TRANSFORMERS}
          />
          <FloatingLinkEditorPlugin />
          <SetInitialValuePlugin value={initialValue} version={initialValueVersion} />
        </Box>
      </Box>
    </LexicalComposer>
  );
};
