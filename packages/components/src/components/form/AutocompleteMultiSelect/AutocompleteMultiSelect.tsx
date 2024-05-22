// ui...
// mirar que no haya errores en la consola
// BUG, type for the first option, select it, remove it, type again for the first option, select it (not working)
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

  const {
    selectedItems,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    getSelectedItemProps,
    getDropdownProps,
  } = useMultipleSelection({
    onStateChange: ({ selectedItems: newSelectedItems, type }) => {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          removeSelectedItem(newSelectedItems);
          break;
        case useMultipleSelection.stateChangeTypes.FunctionAddSelectedItem:
          addSelectedItem(newSelectedItems);
          setInputValue('');
          break;
        default:
          break;
      }
    },
    ...useMultipleSelectionProps,
  });

  const getFilteredItems = (selectedItems, inputValue) => {
    const lowerCasedInputValue = inputValue.toLowerCase();
    return items.filter(
      (item) => !selectedItems.includes(item) && itemToString(item)?.toLowerCase().includes(lowerCasedInputValue)
    );
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
    itemToString,
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

const AutocompleteMultiSelectSelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps> = ({
  renderSelectedItem,
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
