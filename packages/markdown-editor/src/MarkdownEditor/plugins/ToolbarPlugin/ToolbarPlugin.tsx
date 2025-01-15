import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Dropdown,
  Flex,
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
  IconCode,
  IconLink,
  IconList,
  IconListNumbers,
  IconMarkdown,
} from '@cmpsr/components';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  DEPRECATED_$isGridSelection,
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  $createParagraphNode,
  $getNodeByKey,
  COMMAND_PRIORITY_CRITICAL,
  KEY_MODIFIER_COMMAND,
  COMMAND_PRIORITY_NORMAL,
  LexicalNode,
  ElementNode,
  TextNode,
} from 'lexical';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $setBlocksType } from '@lexical/selection';
import { $findMatchingParent, $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from '@lexical/list';
import { $createHeadingNode, $isHeadingNode, HeadingTagType } from '@lexical/rich-text';
import {
  $createCodeNode,
  $isCodeNode,
  getDefaultCodeLanguage,
  CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  CODE_LANGUAGE_MAP,
  getLanguageFriendlyName,
} from '@lexical/code';

import { getSelectedNode } from '../../utils/getSelectedNode';
import { sanitizeUrl } from '../../utils/sanitizeUrl';
import { ToolbarPluginProps } from './types';
import { EditorMode } from '../../types';

const supportedBlockTypes = new Set(['paragraph', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

const blockTypeToBlockName = {
  code: 'Code Block',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  paragraph: 'Normal',
};

const blockTypeToBlockIcon = {
  code: <IconSourceCode />,
  h1: <IconH1 />,
  h2: <IconH2 />,
  h3: <IconH3 />,
  h4: <IconH4 />,
  h5: <IconH5 />,
  h6: <IconH6 />,
  paragraph: <IconLetterT />,
};

const getCodeLanguageOptions = (): [string, string][] => {
  const options: [string, string][] = [];

  for (const [lang, friendlyName] of Object.entries(CODE_LANGUAGE_FRIENDLY_NAME_MAP)) {
    options.push([lang, friendlyName]);
  }

  return options;
};

const CODE_LANGUAGE_OPTIONS = getCodeLanguageOptions();

const CAN_USE_DOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';

const IS_APPLE: boolean = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

const BlockOptionsDropdownList = ({ editor, blockType, isDisabled }) => {
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
        isDisabled={isDisabled}
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

export const ToolbarPlugin = ({
  isDisabled,
  externalActions,
  toolbarPluginProps,
  editorMode,
  toggleEditorMode,
}: ToolbarPluginProps) => {
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState('paragraph');
  const [selectedElementKey, setSelectedElementKey] = useState(null);
  const [codeLanguage, setCodeLanguage] = useState(getDefaultCodeLanguage());
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isNumberedList, setIsNumberedList] = useState(false);
  const [isBulletList, setIsBulletList] = useState(false);
  const isPlainEditorModeEnabled = editorMode === EditorMode.PlainText;
  const isFormattingDisabled = isDisabled || isPlainEditorModeEnabled;

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
      setIsCode(selection.hasFormat('code'));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      const handleListNode = (element: LexicalNode, anchorNode: ElementNode | TextNode) => {
        const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode);
        const type = parentList ? parentList.getListType() : element.getListType();
        setIsBulletList(type === 'bullet');
        setIsNumberedList(type === 'number');
      };

      const handleNonListNode = (element: LexicalNode) => {
        setIsBulletList(false);
        setIsNumberedList(false);

        const type = $isHeadingNode(element) ? element.getTag() : element.getType();
        if (type in blockTypeToBlockName) {
          setBlockType(type as keyof typeof blockTypeToBlockName);
        }
        if ($isCodeNode(element)) {
          const language = element.getLanguage() as keyof typeof CODE_LANGUAGE_MAP;
          setCodeLanguage(language ? CODE_LANGUAGE_MAP[language] || language : '');
          return;
        }
      };

      if (elementDOM) {
        setSelectedElementKey(elementKey);

        if ($isListNode(element)) {
          handleListNode(element, anchorNode);
        } else {
          handleNonListNode(element);
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
      COMMAND_PRIORITY_CRITICAL,
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
        COMMAND_PRIORITY_CRITICAL,
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
    );
  }, [updateToolbar, activeEditor, editor]);

  useEffect(() => {
    return activeEditor.registerCommand(
      KEY_MODIFIER_COMMAND,
      (payload) => {
        const event: KeyboardEvent = payload;
        const { code, ctrlKey, metaKey } = event;

        if (code === 'KeyK' && (ctrlKey || metaKey)) {
          event.preventDefault();
          return activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
        }
        return false;
      },
      COMMAND_PRIORITY_NORMAL,
    );
  }, [activeEditor, isLink]);

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
    [activeEditor, selectedElementKey],
  );

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [activeEditor, isLink]);

  const formatBulletList = useCallback(() => {
    if (blockType !== 'bullet') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  }, [activeEditor]);

  const formatNumberedList = useCallback(() => {
    if (blockType !== 'number') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  }, [activeEditor]);

  const toggleMarkdownButton = (
    <ToolbarIcon
      icon={<IconMarkdown />}
      isDisabled={isDisabled}
      isActive={isPlainEditorModeEnabled}
      onClick={toggleEditorMode}
      title="Toggle Markdown on and off"
      aria-label="Toggle Markdown on and off"
    />
  );

  return (
    <Flex
      p="0.5rem 1rem"
      h="3.25rem"
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="ui-element-outline-default"
      w="100%"
      justifyContent="space-between"
      {...toolbarPluginProps}
    >
      <Flex h="100%" gap="0.5rem" alignItems="center">
        <ToolbarIcon
          isDisabled={isDisabled || !canUndo}
          onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
          aria-label="Undo"
          icon={<IconArrowBackUp />}
          title={`Undo ${IS_APPLE ? '(⌘' : '(Ctrl+'}Z)`}
        />
        <ToolbarIcon
          isDisabled={isDisabled || !canRedo}
          onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
          aria-label="Redo"
          icon={<IconArrowForwardUp />}
          title={`Redo (${IS_APPLE ? '⇧⌘Z' : 'Ctrl+Y'})`}
        />
        <Divider orientation="vertical" />
        {supportedBlockTypes.has(blockType) && (
          <>
            <BlockOptionsDropdownList editor={activeEditor} blockType={blockType} isDisabled={isFormattingDisabled} />
            <Divider orientation="vertical" />
          </>
        )}
        {blockType === 'code' ? (
          <>
            <Dropdown>
              <Dropdown.Button
                isDisabled={isFormattingDisabled}
                as={Button}
                variant="ghost"
                trailingIcon={<IconChevronDown />}
              >
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
            <Divider orientation="vertical" />
            {toggleMarkdownButton}
          </>
        ) : (
          <>
            <ToolbarIcon
              isActive={isBold}
              onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
              aria-label="Format Bold"
              icon={<IconBold />}
              isDisabled={isFormattingDisabled}
              title={`Bold (${IS_APPLE ? '⌘' : 'Ctrl+'}B)`}
            />
            <ToolbarIcon
              isActive={isItalic}
              onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
              aria-label="Format Italic"
              icon={<IconItalic />}
              isDisabled={isFormattingDisabled}
              title={`Italic (${IS_APPLE ? '⌘' : 'Ctrl+'}I)`}
            />
            <ToolbarIcon
              isActive={isCode}
              onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')}
              aria-label="Format Code"
              icon={<IconCode />}
              isDisabled={isFormattingDisabled}
              title="Format Code"
            />
            <ToolbarIcon
              isActive={isLink}
              onClick={insertLink}
              aria-label="Insert Link"
              icon={<IconLink />}
              isDisabled={isFormattingDisabled}
              title={`Insert link (${IS_APPLE ? '⌘' : 'Ctrl+'}K)`}
            />
            <Divider orientation="vertical" />
            <ToolbarIcon
              isActive={isNumberedList}
              onClick={formatNumberedList}
              aria-label="Insert Numbered List"
              icon={<IconListNumbers />}
              isDisabled={isFormattingDisabled}
              title="Insert Numbered List"
            />
            <ToolbarIcon
              isActive={isBulletList}
              onClick={formatBulletList}
              aria-label="Insert Bullet List"
              icon={<IconList />}
              isDisabled={isFormattingDisabled}
              title="Insert Bullet List"
            />
            <Divider orientation="vertical" />
            {toggleMarkdownButton}
          </>
        )}
      </Flex>
      {externalActions}
    </Flex>
  );
};
