import { useEffect, useState } from 'react';

import { $convertFromMarkdownString } from '@lexical/markdown';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { PLAYGROUND_TRANSFORMERS } from '../MarkdownTransformers';
import { SetInitialValuePluginProps } from './types';

export const SetInitialValuePlugin = ({ value }: SetInitialValuePluginProps) => {
  const [editor] = useLexicalComposerContext();
  const [valueSet, setValueSet] = useState(false);

  useEffect(() => {
    if (valueSet || !value) return;
    editor.update(() => {
      $convertFromMarkdownString(value, PLAYGROUND_TRANSFORMERS);
      setValueSet(true);
    });
  }, [value, editor, valueSet]);

  return null;
};
