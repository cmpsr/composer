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
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { $convertFromMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';

import { OnChangeMarkdown } from './plugins/OnChangeMarkdown';
import { CodeHighlightPlugin } from './plugins/CodeHighlightPlugin';
import { AutoLinkPlugin } from './plugins/AutoLinkPlugin';
import { ReadOnlyPlugin } from './plugins/ReadOnlyPlugin';
import { ListMaxIndentLevelPlugin } from './plugins/ListMaxIndentLevelPlugin';
import { ToolbarPlugin } from './plugins/ToolbarPlugin';
import { FloatingLinkEditorPlugin } from './plugins/FloatingLinkEditorPlugin';
import { MarkdownShortcutPlugin } from './plugins/MarkdownShortcutPlugin';

import './style.css';

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
  maxWidth = '38rem',
  color = 'text-primary',
  backgroundColor = 'background-action-default',
  border = '1px solid',
  borderColor = 'ui-element-outline-default',
  height = '17rem',
  minHeight = '12rem',
}) => {
  return (
    <LexicalComposer
      initialConfig={{
        ...editorConfig,
        editorState: () => $convertFromMarkdownString(initialValue ?? '', TRANSFORMERS),
      }}
    >
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
      >
        {!isReadonly && <ToolbarPlugin />}
        <Box backgroundColor={backgroundColor} position="relative">
          <RichTextPlugin
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
          <OnChangeMarkdown onChange={onChange} transformers={TRANSFORMERS} />
          <FloatingLinkEditorPlugin />
        </Box>
      </Box>
    </LexicalComposer>
  );
};
