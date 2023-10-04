import { useEffect, useState } from 'react';

import { $convertFromMarkdownString } from '@lexical/markdown';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { PLAYGROUND_TRANSFORMERS } from '../MarkdownTransformers';
import { TextMode } from '../../types';
import { SetInitialValuePluginProps } from './types';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';

export const SetInitialValuePlugin = ({ value, version, textMode }: SetInitialValuePluginProps) => {
  const [editor] = useLexicalComposerContext();
  const [valueSet, setValueSet] = useState<boolean>(undefined);

  useEffect(() => {
    setValueSet(false);
  }, [version]);

  useEffect(() => {
    if (valueSet || valueSet === undefined) return;
    if (value !== undefined && value !== null) setValueSet(true);
    editor.update(() => {
      const content = value ?? '';

      if (textMode === TextMode.PlainText) {
        $getRoot()
          .clear()
          .append($createParagraphNode().append($createTextNode(content)));
      } else {
        $convertFromMarkdownString(content, PLAYGROUND_TRANSFORMERS);
      }
    });
  }, [value, editor, valueSet]);

  return null;
};
