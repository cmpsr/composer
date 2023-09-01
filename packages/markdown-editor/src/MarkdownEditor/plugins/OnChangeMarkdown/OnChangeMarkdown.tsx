import React, { FC, useMemo } from 'react';
import { OnChangeMarkdownProps } from './types';
import debounce from 'lodash.debounce';

import type { EditorState, LexicalEditor } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';

const DEBOUNCE_DEFAULT_TIME = 500;

export const OnChangeMarkdown: FC<OnChangeMarkdownProps> = ({
  onChange,
  transformers = TRANSFORMERS,
  debounceTime = DEBOUNCE_DEFAULT_TIME,
}) => {
  const [editor] = useLexicalComposerContext();

  const handleChange = useMemo(() => {
    if (!onChange || typeof onChange !== 'function') return;

    return debounce((_editorState: EditorState, editor: LexicalEditor) => {
      editor.update(() => {
        const markdown = $convertToMarkdownString(transformers);
        onChange(markdown);
      });
    }, debounceTime);
  }, [editor, onChange, transformers, debounceTime]);

  return <OnChangePlugin onChange={handleChange} ignoreSelectionChange />;
};
