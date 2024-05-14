// la interfaz de items debe ser genérico
// no puede haber nada relacionado con label/value en el código
// eliminar los ts-ignore
// modular el componente
// ui...

import React, { FC, useState } from 'react';
import { useMultipleSelection, useCombobox } from 'downshift';
import { Box, Input, List, ListItem, IconButton, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';
import { AutocompleteMultiSelectProps } from './types';

export const AutocompleteMultiSelect: FC<AutocompleteMultiSelectProps<Item>> = ({
  // items,
  useComboboxProps,
  useMultipleSelectionProps,
}) => {
  const [inputValue, setInputValue] = useState('');

  const { selectedItems, getSelectedItemProps, addSelectedItem, removeSelectedItem, setSelectedItems } =
    useMultipleSelection({
      onStateChange: (changes) => {
        if ('selectedItem' in changes) {
          const { type, selectedItem } = changes;
          switch (type) {
            case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
              if (selectedItem) {
                // @ts-ignore
                setSelectedItems((currentSelectedItems: Item[]) =>
                  currentSelectedItems.filter((item) => item !== selectedItem)
                );
              }
              break;
            case useMultipleSelection.stateChangeTypes.FunctionAddSelectedItem:
              if (selectedItem && !selectedItems.includes(selectedItem)) {
                // @ts-ignore
                setSelectedItems((currentSelectedItems) => [...currentSelectedItems, selectedItem]);
              }
              setInputValue('');
              break;
            default:
              break;
          }
        }
      },
      ...useMultipleSelectionProps,
    });

  const { isOpen, getMenuProps, getInputProps, getToggleButtonProps, highlightedIndex, getItemProps } = useCombobox({
    // items,
    inputValue,
    onSelectedItemChange: ({ selectedItem }) => {
      selectedItem && addSelectedItem(selectedItem);
    },
    // itemToString: (item) => (item ? item.label : ''),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return { ...changes, isOpen: true };
        default:
          return changes;
      }
    },
    onStateChange({ inputValue: newInputValue, type, selectedItem: newSelectedItem }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (newSelectedItem) {
            setSelectedItems([...selectedItems, newSelectedItem]);
            setInputValue('');
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInputValue);

          break;
        default:
          break;
      }
    },
    ...useComboboxProps,
  });

  return (
    <Box>
      <Box>
        {selectedItems.map((selectedItem, index) => (
          <Tag
            size="lg"
            borderRadius="full"
            variant="solid"
            colorScheme="blue"
            key={`selected-item-${index}`}
            {...getSelectedItemProps({ selectedItem, index })}
          >
            <TagLabel>{selectedItem.label}</TagLabel>
            <TagCloseButton onClick={() => removeSelectedItem(selectedItem)} />
          </Tag>
        ))}
        <Input {...getInputProps()} placeholder="Start typing to filter" />
        <IconButton aria-label="toggle menu" icon={<Box as="span">&#8595;</Box>} {...getToggleButtonProps()} />
      </Box>
      <List {...getMenuProps()} spacing={2} style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {isOpen &&
          useComboboxProps.items.map((item, index) => (
            <ListItem
              key={`${item.label}${index}`}
              bg={highlightedIndex === index ? 'blue.100' : 'white'}
              p={2}
              cursor="pointer"
              {...getItemProps({ item, index })}
            >
              {item.label}
            </ListItem>
          ))}
      </List>
    </Box>
  );
};
