import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ReadOnlyPluginProps } from './types';

export const ReadOnlyPlugin = ({ isDisabled = false }: ReadOnlyPluginProps) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.setEditable(!isDisabled);
  }, [editor, isDisabled]);

  return null;
};
