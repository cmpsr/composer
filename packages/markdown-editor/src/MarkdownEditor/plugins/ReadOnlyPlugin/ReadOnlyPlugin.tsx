import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ReadOnlyPluginProps } from './types';

export const ReadOnlyPlugin = ({ isReadonly = false }: ReadOnlyPluginProps) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.setEditable(!isReadonly);
  }, [editor, isReadonly]);

  return null;
};
