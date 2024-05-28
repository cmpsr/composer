// crear una canary para probarlo del lado de IH con la solución final --> react-hook-form

import React, { FC, useMemo, useRef, useState, useCallback } from 'react';
import { useMultipleSelection, useCombobox } from 'downshift';
import {
  AutocompleteMultiSelectContextProps,
  AutocompleteMultiSelectInputProps,
  AutocompleteMultiSelectListProps,
  AutocompleteMultiSelectProps,
  AutocompleteMultiSelectSelectedItemsProps,
  AutocompleteMultiSelectStaticMembers,
} from './types';
import { createContext } from '@chakra-ui/react-utils';
import { Input } from '../Input';
import { Box } from '../../layouts/Box';
import { Tag } from '@components/dataDisplay';
import { Text } from '@components/typography';
import { IconChevronDown, IconChevronUp, IconX } from '@components/media';
import { RecursiveCSSObject, StyleProps, useStyleConfig } from '@chakra-ui/react';

const [AutocompleteMultiSelectProvider, useAutocompleteMultiSelectContext] =
  createContext<AutocompleteMultiSelectContextProps>({});

export const AutocompleteMultiSelect: FC<AutocompleteMultiSelectProps> & AutocompleteMultiSelectStaticMembers = ({
  children,
  items,
  itemToString,
  useComboboxProps,
  useMultipleSelectionProps,
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
        items: filteredItems,
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

const AutocompleteMultiSelectInput: FC<AutocompleteMultiSelectInputProps> = ({
  clearButtonMode = 'has-value',
  ...rest
}) => {
  const { reset, getInputProps, getToggleButtonProps, getDropdownProps, isOpen } = useAutocompleteMultiSelectContext();
  const ref = useRef<HTMLInputElement>(null);
  const inputProps = getInputProps({ ...getDropdownProps({ preventKeyAction: isOpen, ref }) });

  const clearButtonConditions = {
    'has-value': inputProps.value,
    never: false,
    always: true,
  };
  const shouldShowClearButton = clearButtonConditions[clearButtonMode];

  const onReset = useCallback(() => {
    reset?.();
    ref?.current?.focus?.();
  }, []);

  return (
    <Input
      trailingIcon={
        shouldShowClearButton ? (
          <IconX data-testid="cmpsr.autocomplete.clear-button" cursor="pointer" onClick={onReset} />
        ) : isOpen ? (
          <IconChevronUp cursor="pointer" {...getToggleButtonProps()} />
        ) : (
          <IconChevronDown cursor="pointer" {...getToggleButtonProps()} />
        )
      }
      {...inputProps}
      {...rest}
    />
  );
};

AutocompleteMultiSelect.Input = AutocompleteMultiSelectInput;

const AutocompleteMultiSelectList: FC<AutocompleteMultiSelectListProps> = ({
  noResultsContent,
  renderItem,
  ...rest
}) => {
  const { isOpen, items, selectedItem, highlightedIndex, getItemProps, getMenuProps } =
    useAutocompleteMultiSelectContext();
  const styles = useStyleConfig('AutocompleteMultiSelect') as Record<
    string,
    RecursiveCSSObject<StyleProps & { active: StyleProps; highlighted: StyleProps }>
  >;
  const noResults = noResultsContent ?? <Text {...styles.noResults}>No results</Text>;

  return (
    <Box as="ul" visibility={isOpen ? 'visible' : 'hidden'} {...styles.list} {...getMenuProps()} {...rest}>
      {isOpen && items.length
        ? items.map((item, index: number) => (
            <Box
              as="li"
              key={index}
              {...styles.item}
              {...(item === selectedItem && {
                ...styles.item.active,
              })}
              {...(highlightedIndex === index && {
                ...styles.item.highlighted,
              })}
              {...getItemProps({ index, item })}
            >
              {renderItem(item)}
            </Box>
          ))
        : noResults}
    </Box>
  );
};

AutocompleteMultiSelect.List = AutocompleteMultiSelectList;

const defaultRenderSelectedItem = (selectedItem, removeSelectedItem) => (
  <Tag>
    <Tag.Label>{selectedItem}</Tag.Label>
    <Tag.RightIcon as={IconX} onClick={removeSelectedItem} />
  </Tag>
);

const AutocompleteMultiSelectSelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps> = ({
  renderSelectedItem = defaultRenderSelectedItem,
  ...rest
}) => {
  const { selectedItems, getSelectedItemProps, removeSelectedItem } = useAutocompleteMultiSelectContext();
  const styles = useStyleConfig('AutocompleteMultiSelect') as Record<
    string,
    RecursiveCSSObject<StyleProps & { active: StyleProps; highlighted: StyleProps }>
  >;

  return selectedItems.length ? (
    <Box as="ul" {...rest} {...styles.selectedItems}>
      {selectedItems.map((selectedItem, index) => (
        <Box as="li" key={`selected-item-${index}`} {...getSelectedItemProps({ selectedItem, index })}>
          {renderSelectedItem(selectedItem, () => removeSelectedItem(selectedItem))}
        </Box>
      ))}
    </Box>
  ) : null;
};

AutocompleteMultiSelect.SelectedItems = AutocompleteMultiSelectSelectedItems;
