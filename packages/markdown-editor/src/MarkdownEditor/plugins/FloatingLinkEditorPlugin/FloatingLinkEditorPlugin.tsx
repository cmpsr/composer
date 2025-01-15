import React, { Dispatch, JSX, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box, IconButton, IconEdit, IconLink, Input, Link } from '@cmpsr/components';

import { $isAutoLinkNode, $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $findMatchingParent, mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isRangeSelection,
  BLUR_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  GridSelection,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  NodeSelection,
  RangeSelection,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';

import { getSelectedNode } from '../../utils/getSelectedNode';
import { setFloatingElemPositionForLinkEditor } from '../../utils/setFloatingElemPositionForLinkEditor';
import { sanitizeUrl } from '../../utils/sanitizeUrl';
import { FloatingLinkEditorPluginProps } from './types';
import { useEditorFocus } from '../../utils/useEditorFocus';

type FloatingLinkEditorProps = {
  editor: LexicalEditor;
  isLink: boolean;
  setIsLink: Dispatch<boolean>;
  anchorElem: HTMLElement;
};

const FloatingLinkEditor = ({ editor, isLink, setIsLink, anchorElem }: FloatingLinkEditorProps): JSX.Element | null => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState<RangeSelection | GridSelection | NodeSelection | null>(null);
  const isEditorFocused = useEditorFocus();
  const shouldRenderFloatingLink = isLink && (isEditMode || isEditorFocused);

  // This useEffect registers a command to handle blur events in the editor.
  // It prevents closing the link editor when clicking inside the editor (excluding the input),
  // ensuring that the link editor remains open when interacting with its content.
  // It also handles proper focus behavior and closes the link editor when necessary.
  useEffect(
    () =>
      editor.registerCommand(
        BLUR_COMMAND,
        (event) => {
          if (editorRef.current && event.target === editorRef.current) {
            // Click occurred within the editorRef element, do nothing
            return true;
          }

          if (!isEditMode && isLink) {
            setIsLink(false);
            editor.blur();
          }
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
    [editorRef, isEditMode, isLink, setIsLink],
  );

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl('');
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();

    if (
      selection !== null &&
      nativeSelection !== null &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode) &&
      editor.isEditable()
    ) {
      const domRect: DOMRect | undefined = nativeSelection.focusNode?.parentElement?.getBoundingClientRect();
      if (domRect) {
        domRect.y += 40;
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem);
      }
      setLastSelection(selection);
    } else if (!activeElement) {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem);
      }
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl('');
    }

    return true;
  }, [anchorElem, editor]);

  useEffect(() => {
    const scrollElem = anchorElem.parentElement;

    const update = () => {
      editor.getEditorState().read(() => {
        updateLinkEditor();
      });
    };

    window.addEventListener('resize', update);

    if (scrollElem) {
      scrollElem.addEventListener('scroll', update);
    }

    return () => {
      window.removeEventListener('resize', update);

      if (scrollElem) {
        scrollElem.removeEventListener('scroll', update);
      }
    };
  }, [anchorElem.parentElement, editor, updateLinkEditor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        () => {
          if (isLink) {
            setIsLink(false);
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_HIGH,
      ),
    );
  }, [editor, updateLinkEditor, setIsLink, isLink]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const monitorInputInteraction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLinkSubmission();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setEditMode(false);
    }
  };

  const handleLinkSubmission = () => {
    if (lastSelection !== null) {
      if (linkUrl !== '') {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(linkUrl));
      }
      setEditMode(false);
    }
  };

  return (
    <Box
      ref={editorRef}
      position="absolute"
      top="0"
      left="0"
      zIndex={100}
      mt="-0.375rem"
      maxW="20rem"
      w="100%"
      opacity="0"
      boxShadow="elevation-interactive"
      borderRadius="0.5rem"
      p="0.25rem"
      transition="opacity 0.5s"
      willChange="transform"
      backgroundColor="background-action-active"
      display={shouldRenderFloatingLink ? 'flex' : 'none'}
    >
      {!isLink ? null : isEditMode ? (
        <Input
          ref={inputRef}
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          onBlur={() => setEditMode(false)}
          onKeyDown={monitorInputInteraction}
          trailingIcon={<IconLink />}
        />
      ) : (
        <Box
          width="calc(100% - 24px)"
          position="relative"
          p="0.5rem 0.75rem"
          boxSizing="border-box"
          onMouseDown={(event) => event.preventDefault()}
        >
          <Link href={linkUrl} target="_blank" rel="noopener noreferrer" noOfLines={1} title={linkUrl}>
            {linkUrl}
          </Link>
          <IconButton
            variant="ghost"
            position="absolute"
            top="2px"
            bottom="0"
            right="-20px"
            size="s"
            icon={<IconEdit />}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => setEditMode(true)}
            aria-label="Edit Url"
          />
        </Box>
      )}
    </Box>
  );
};

const useFloatingLinkEditorToolbar = (editor: LexicalEditor, anchorElem: HTMLElement): JSX.Element | null => {
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isLink, setIsLink] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const linkParent = $findMatchingParent(node, $isLinkNode);
      const autoLinkParent = $findMatchingParent(node, $isAutoLinkNode);

      if (linkParent !== null && autoLinkParent === null) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar();
          setActiveEditor(newEditor);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
    );
  }, [editor, updateToolbar]);

  return createPortal(
    <FloatingLinkEditor editor={activeEditor} isLink={isLink} anchorElem={anchorElem} setIsLink={setIsLink} />,
    anchorElem,
  );
};

export const FloatingLinkEditorPlugin = ({
  anchorElement = document.body,
}: FloatingLinkEditorPluginProps): JSX.Element | null => {
  const [editor] = useLexicalComposerContext();

  return useFloatingLinkEditorToolbar(editor, anchorElement);
};
