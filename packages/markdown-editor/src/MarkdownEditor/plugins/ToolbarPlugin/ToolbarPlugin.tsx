import React, { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  Flex,
  IconBell,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconChevronDown,
  IconLetterT,
  IconSourceCode,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconBold,
  IconButton,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconCode,
  IconLink,
  IconEdit,
  Box,
  Input,
  Link,
  IconList,
} from '@cmpsr/components';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  DEPRECATED_$isGridSelection,
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  $createParagraphNode,
  $getNodeByKey,
  COMMAND_PRIORITY_CRITICAL,
} from 'lexical';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $isParentElementRTL, $isAtNodeEnd, $setBlocksType } from '@lexical/selection';
import { $findMatchingParent, $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from '@lexical/list';
import { createPortal } from 'react-dom';
import { $createHeadingNode, $createQuoteNode, $isHeadingNode, HeadingTagType } from '@lexical/rich-text';
import {
  $createCodeNode,
  $isCodeNode,
  getDefaultCodeLanguage,
  CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  CODE_LANGUAGE_MAP,
  getLanguageFriendlyName,
} from '@lexical/code';

const LowPriority = 1;

const supportedBlockTypes = new Set(['paragraph', 'quote', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol']);

const blockTypeToBlockName = {
  code: 'Code Block',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  ol: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote',
  ul: 'Bulleted List',
};

const blockTypeToBlockIcon = {
  code: <IconSourceCode />,
  h1: <IconH1 />,
  h2: <IconH2 />,
  h3: <IconH3 />,
  h4: <IconH4 />,
  h5: <IconH5 />,
  h6: <IconH6 />,
  ol: <IconBell />,
  paragraph: <IconLetterT />,
  quote: <IconBell />,
  ul: <IconBell />,
};

const getCodeLanguageOptions = (): [string, string][] => {
  const options: [string, string][] = [];

  for (const [lang, friendlyName] of Object.entries(CODE_LANGUAGE_FRIENDLY_NAME_MAP)) {
    options.push([lang, friendlyName]);
  }

  return options;
};

const CODE_LANGUAGE_OPTIONS = getCodeLanguageOptions();

const positionEditorElement = (editor: HTMLDivElement, rect: DOMRect) => {
  if (rect === null) {
    editor.style.opacity = '0';
    editor.style.top = '-1000px';
    editor.style.left = '-1000px';
  } else {
    editor.style.opacity = '1';
    editor.style.top = `${rect.top + rect.height + window.scrollY + 10}px`;
    editor.style.left = `${rect.left + window.scrollX - editor.offsetWidth / 2 + rect.width / 2 + 130}px`;
  }
};

const CAN_USE_DOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';

const IS_APPLE: boolean = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

function FloatingLinkEditor({ editor }) {
  const editorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef(null);
  const mouseDownRef = useRef(false);
  const [linkProtocol, setLinkProtocol] = useState('https://');
  const [linkUrl, setLinkUrl] = useState('');
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState(null);

  const updateLinkEditor = useCallback(() => {
    const updateState = (url: string) => {
      const [protocol, urlWithoutProtocol] = url.split('://');
      setLinkProtocol(`${protocol}://`);
      setLinkUrl(urlWithoutProtocol);
    };
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        updateState(parent.getURL());
      } else if ($isLinkNode(node)) {
        updateState(node.getURL());
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
      !nativeSelection.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode)
    ) {
      const domRange = nativeSelection.getRangeAt(0);
      let rect: DOMRect;
      if (nativeSelection.anchorNode === rootElement) {
        let inner = rootElement;
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild;
        }
        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }

      if (!mouseDownRef.current) {
        positionEditorElement(editorElem, rect);
      }
      setLastSelection(selection);
    } else if (!activeElement) {
      positionEditorElement(editorElem, null);
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl('');
    }

    return true;
  }, [editor]);

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
        LowPriority
      )
    );
  }, [editor, updateLinkEditor]);

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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (lastSelection !== null) {
        if (linkUrl !== '') {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkProtocol + linkUrl);
        }
        setEditMode(false);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setEditMode(false);
    }
  };

  return (
    <Box
      ref={editorRef}
      className="link-editor"
      position="absolute"
      zIndex={100}
      mt="-0.375rem"
      maxW="20rem"
      w="100%"
      opacity={0}
      boxShadow="elevation-interactive"
      borderRadius="0.5rem"
      p="0.25rem"
      transition="opacity 0.5s"
    >
      {isEditMode ? (
        <Input
          leftLabel={linkProtocol}
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          trailingIcon={<IconLink />}
        />
      ) : (
        <Box width="calc(100% - 24px)" position="relative" p="0.5rem 0.75rem" boxSizing="border-box">
          <Link href={linkProtocol + linkUrl} target="_blank" rel="noopener noreferrer">
            {linkProtocol + linkUrl}
          </Link>
          <IconButton
            variant="ghost"
            position="absolute"
            top="0"
            bottom="0"
            right="0"
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
}

function getSelectedNode(selection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

const BlockOptionsDropdownList = ({ editor, blockType }) => {
  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection) || DEPRECATED_$isGridSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType !== headingSize) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection) || DEPRECATED_$isGridSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      });
    }
  };

  const formatBulletList = () => {
    if (blockType !== 'bullet') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  const formatNumberedList = () => {
    if (blockType !== 'number') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  const formatQuote = () => {
    if (blockType !== 'quote') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection) || DEPRECATED_$isGridSelection(selection)) {
          $setBlocksType(selection, () => $createQuoteNode());
        }
      });
    }
  };

  const formatCode = () => {
    if (blockType !== 'code') {
      editor.update(() => {
        let selection = $getSelection();

        if ($isRangeSelection(selection) || DEPRECATED_$isGridSelection(selection)) {
          if (selection.isCollapsed()) {
            $setBlocksType(selection, () => $createCodeNode());
          } else {
            const textContent = selection.getTextContent();
            const codeNode = $createCodeNode();
            selection.insertNodes([codeNode]);
            selection = $getSelection();
            if ($isRangeSelection(selection)) selection.insertRawText(textContent);
          }
        }
      });
    }
  };

  return (
    <Dropdown>
      <Dropdown.Button
        as={Button}
        variant="ghost"
        leadingIcon={blockTypeToBlockIcon[blockType]}
        trailingIcon={<IconChevronDown />}
      >
        {blockTypeToBlockName[blockType]}
      </Dropdown.Button>
      <Dropdown.List>
        <Dropdown.Item onClick={formatParagraph} icon={<IconLetterT />}>
          Normal
        </Dropdown.Item>
        <Dropdown.Item onClick={() => formatHeading('h1')} icon={<IconH1 />}>
          Heading 1
        </Dropdown.Item>
        <Dropdown.Item onClick={() => formatHeading('h2')} icon={<IconH2 />}>
          Heading 2
        </Dropdown.Item>
        <Dropdown.Item onClick={() => formatHeading('h3')} icon={<IconH3 />}>
          Heading 3
        </Dropdown.Item>
        <Dropdown.Item onClick={() => formatHeading('h4')} icon={<IconH4 />}>
          Heading 4
        </Dropdown.Item>
        <Dropdown.Item onClick={() => formatHeading('h5')} icon={<IconH5 />}>
          Heading 5
        </Dropdown.Item>
        <Dropdown.Item onClick={() => formatHeading('h6')} icon={<IconH6 />}>
          Heading 6
        </Dropdown.Item>
        <Dropdown.Item onClick={formatBulletList} icon={<IconList />}>
          Bulleted List
        </Dropdown.Item>
        <Dropdown.Item onClick={formatNumberedList} icon={<IconBell />}>
          Numbered List
        </Dropdown.Item>
        <Dropdown.Item onClick={formatQuote} icon={<IconBell />}>
          Quote
        </Dropdown.Item>
        <Dropdown.Item onClick={formatCode} icon={<IconSourceCode />}>
          Code Block
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

const ToolbarIcon = ({ isActive = undefined, isDisabled, onClick, title, icon, 'aria-label': ariaLabel }) => (
  <IconButton
    isActive={isActive}
    isDisabled={isDisabled}
    onClick={onClick}
    icon={icon}
    variant="ghost"
    size="s"
    title={title}
    aria-label={ariaLabel}
    _disabled={{ opacity: 0.4, backgroundColor: 'transparent', pointerEvents: 'none', cursor: 'not_allowed' }}
  />
);

export const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState('paragraph');
  const [selectedElementKey, setSelectedElementKey] = useState(null);
  const [codeLanguage, setCodeLanguage] = useState(getDefaultCodeLanguage());
  const [isRTL, setIsRTL] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isCode, setIsCode] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (!element) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);

      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));
      setIsRTL($isParentElementRTL(selection));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode);
          const type = parentList ? parentList.getListType() : element.getListType();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element) ? element.getTag() : element.getType();
          if (type in blockTypeToBlockName) {
            setBlockType(type as keyof typeof blockTypeToBlockName);
          }
          if ($isCodeNode(element)) {
            const language = element.getLanguage() as keyof typeof CODE_LANGUAGE_MAP;
            setCodeLanguage(language ? CODE_LANGUAGE_MAP[language] || language : '');
            return;
          }
        }
      }
    }
  }, [activeEditor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        updateToolbar();
        setActiveEditor(newEditor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, updateToolbar]);

  useEffect(() => {
    return mergeRegister(
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      activeEditor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [updateToolbar, activeEditor, editor]);

  const onCodeLanguageSelect = useCallback(
    (value: string) => {
      activeEditor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(value);
          }
        }
      });
    },
    [activeEditor, selectedElementKey]
  );

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  return (
    <Flex
      gap="0.5rem"
      p="0.5rem 1rem"
      h="3.25rem"
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="ui-element-outline-default"
    >
      <ToolbarIcon
        isDisabled={!canUndo}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        aria-label="Undo"
        icon={<IconArrowBackUp />}
        title={`Undo ${IS_APPLE ? '(⌘' : '(Ctrl+'}Z)`}
      />
      <ToolbarIcon
        isDisabled={!canRedo}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        aria-label="Redo"
        icon={<IconArrowForwardUp />}
        title={`Redo (${IS_APPLE ? '⇧⌘Z' : 'Ctrl+Y'})`}
      />
      <Divider orientation="vertical" />
      {supportedBlockTypes.has(blockType) && (
        <>
          <BlockOptionsDropdownList editor={activeEditor} blockType={blockType} />
          <Divider orientation="vertical" />
        </>
      )}
      {blockType === 'code' ? (
        <Dropdown>
          <Dropdown.Button as={Button} variant="ghost" trailingIcon={<IconChevronDown />}>
            {getLanguageFriendlyName(codeLanguage)}
          </Dropdown.Button>
          <Dropdown.List>
            {CODE_LANGUAGE_OPTIONS.map(([lang, name]) => (
              <Dropdown.Item key={lang} onClick={() => onCodeLanguageSelect(lang)}>
                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown>
      ) : (
        <>
          <ToolbarIcon
            isActive={isBold}
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
            aria-label="Format Bold"
            icon={<IconBold />}
            isDisabled={undefined}
            title={`Bold (${IS_APPLE ? '⌘' : 'Ctrl+'}B)`}
          />
          <ToolbarIcon
            isActive={isItalic}
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
            aria-label="Format Italic"
            icon={<IconItalic />}
            isDisabled={undefined}
            title={`Italic (${IS_APPLE ? '⌘' : 'Ctrl+'}I)`}
          />
          <ToolbarIcon
            isActive={isUnderline}
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
            aria-label="Format Underline"
            icon={<IconUnderline />}
            isDisabled={undefined}
            title={`Underline (${IS_APPLE ? '⌘' : 'Ctrl+'}U)`}
          />
          <ToolbarIcon
            isActive={isStrikethrough}
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')}
            aria-label="Format Strikethrough"
            icon={<IconStrikethrough />}
            isDisabled={undefined}
            title={undefined}
          />
          <ToolbarIcon
            isActive={isCode}
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')}
            aria-label="Format Code"
            icon={<IconCode />}
            isDisabled={undefined}
            title={undefined}
          />
          <ToolbarIcon
            isActive={isLink}
            onClick={insertLink}
            aria-label="Insert Link"
            icon={<IconLink />}
            isDisabled={undefined}
            title={undefined}
          />
          {isLink && createPortal(<FloatingLinkEditor editor={activeEditor} />, document.body)}
          <Divider orientation="vertical" />
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
            }}
            className="toolbar-item spaced"
            aria-label="Left Align"
          >
            <i className="format left-align" />
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
            }}
            className="toolbar-item spaced"
            aria-label="Center Align"
          >
            <i className="format center-align" />
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
            }}
            className="toolbar-item spaced"
            aria-label="Right Align"
          >
            <i className="format right-align" />
          </button>
          <button
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
            }}
            className="toolbar-item"
            aria-label="Justify Align"
          >
            <i className="format justify-align" />
          </button>{' '}
        </>
      )}
    </Flex>
  );
};
