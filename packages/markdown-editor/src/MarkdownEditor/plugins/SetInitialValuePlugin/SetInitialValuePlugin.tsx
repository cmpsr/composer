import { useEffect, useState } from 'react';

import { $convertFromMarkdownString } from '@lexical/markdown';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { PLAYGROUND_TRANSFORMERS } from '../MarkdownTransformers';
import { SetInitialValuePluginProps } from './types';

export const SetInitialValuePlugin = ({ value, version }: SetInitialValuePluginProps) => {
  const [editor] = useLexicalComposerContext();
  const [valueSet, setValueSet] = useState<boolean>(undefined);

  useEffect(() => {
    setValueSet(false);
  }, [version]);

  useEffect(() => {
    if (valueSet || valueSet === undefined) return;
    if (value !== undefined && value !== null) setValueSet(true);
    editor.update(() => {
      $convertFromMarkdownString(value ?? '', PLAYGROUND_TRANSFORMERS);
    });
  }, [value, editor, valueSet]);

  return null;
};
