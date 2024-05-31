import React, { FC, useMemo, useState } from 'react';
import { useMultipleSelection, useCombobox } from 'downshift';
import { createContext } from '@chakra-ui/react-utils';
import { Box } from '../../layouts/Box';
import {
  AutocompleteMultiSelectContextProps,
  AutocompleteMultiSelectProps,
  AutocompleteMultiSelectStaticMembers,
} from './types';

const [AutocompleteMultiSelectProvider, useAutocompleteMultiSelectContext] =
  createContext<AutocompleteMultiSelectContextProps>({});

export const AutocompleteMultiSelect: FC<AutocompleteMultiSelectProps> & AutocompleteMultiSelectStaticMembers = ({
  children,
  items,
  size = 'm',
  itemToString,
  useComboboxProps,
  useMultipleSelectionProps,
  isDisabled = false,
}) => {
  const [inputValue, setInputValue] = useState('');

  const { selectedItems, addSelectedItem, removeSelectedItem, getSelectedItemProps, getDropdownProps } =
    useMultipleSelection({
      ...useMultipleSelectionProps,
    });

  const getFilteredItems = (selectedItems, inputValue) => {
    const lowerCasedInputValue = inputValue.toLowerCase();
    return items.filter((item) => {
      const itemString = (itemToString ? itemToString(item) : item) as string;
      return !selectedItems.includes(item) && itemString.toLowerCase().includes(lowerCasedInputValue);
    });
  };

  const filteredItems = useMemo(() => getFilteredItems(selectedItems, inputValue), [selectedItems, inputValue]);

  const {
    isOpen,
    selectItem: selectedItemCombobox,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: filteredItems,
    selectedItem: null,
    ...(itemToString && { itemToString }),
    inputValue,
    stateReducer: (_state, actionAndChanges) => {
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
            addSelectedItem(newSelectedItem);
          }
          setInputValue('');
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
    <AutocompleteMultiSelectProvider
      value={{
        isOpen,
        size,
        isDisabled,
        items: filteredItems,
        itemToString,
        getMenuProps,
        getInputProps,
        getItemProps,
        getToggleButtonProps,
        selectedItem: selectedItemCombobox,
        highlightedIndex,
        selectedItems,
        removeSelectedItem,
        getSelectedItemProps,
        getDropdownProps,
        reset: () => setInputValue(''),
      }}
    >
      <Box position="relative">{children}</Box>
    </AutocompleteMultiSelectProvider>
  );
};

import AutocompleteMultiSelectInput from './AutocompleteMultiSelectInput';
import AutocompleteMultiSelectList from './AutocompleteMultiSelectList';
import AutocompleteMultiSelectSelectedItems from './AutocompleteMultiSelectSelectedItems';

AutocompleteMultiSelect.Input = AutocompleteMultiSelectInput;
AutocompleteMultiSelect.List = AutocompleteMultiSelectList;
AutocompleteMultiSelect.SelectedItems = AutocompleteMultiSelectSelectedItems;

export default AutocompleteMultiSelect;
export { useAutocompleteMultiSelectContext };
