import { FOCUS_COMMAND, BLUR_COMMAND, COMMAND_PRIORITY_LOW } from 'lexical';
import { useLayoutEffect, useState } from 'react';
import { mergeRegister } from '@lexical/utils';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export const useEditorFocus = () => {
  const [editor] = useLexicalComposerContext();
  // Initial state based on whether the editor is currently focused
  const [hasFocus, setHasFocus] = useState(() => {
    return editor.getRootElement() === document.activeElement;
  });

  useLayoutEffect(() => {
    // Set initial focus state when the component mounts
    setHasFocus(editor.getRootElement() === document.activeElement);

    return mergeRegister(
      editor.registerCommand(
        FOCUS_COMMAND,
        () => {
          setHasFocus(true);
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        BLUR_COMMAND,
        () => {
          setHasFocus(false);
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [editor]);

  return hasFocus;
};
