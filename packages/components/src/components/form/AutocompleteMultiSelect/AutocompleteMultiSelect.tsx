import React, { FC, useMemo, useRef, useState, useCallback } from 'react';
import { useMultipleSelection, useCombobox } from 'downshift';
import {
  AutocompleteMultiSelectContextProps,
  AutocompleteMultiSelectElementSize,
  AutocompleteMultiSelectInputProps,
  AutocompleteMultiSelectListProps,
  AutocompleteMultiSelectProps,
  AutocompleteMultiSelectSelectedItemsProps,
  AutocompleteMultiSelectStaticMembers,
} from './types';
import { createContext } from '@chakra-ui/react-utils';
import { Input } from '../Input';
import { Box } from '../../layouts/Box';
import { Tag, TagSize } from '../../dataDisplay';
import { Text } from '../../typography';
import { IconChevronDown, IconChevronUp, IconX } from '../../media';
import { RecursiveCSSObject, ResponsiveValue, StyleProps, useStyleConfig } from '@chakra-ui/react';

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

const AutocompleteMultiSelectInput: FC<AutocompleteMultiSelectInputProps> = ({
  clearButtonMode = 'has-value',
  size,
  isDisabled,
  ...rest
}) => {
  const {
    reset,
    getInputProps,
    getToggleButtonProps,
    getDropdownProps,
    isOpen,
    size: autocompleteMultiselectSize,
    isDisabled: autocompleteMultiSelectDisabled,
  } = useAutocompleteMultiSelectContext();
  const ref = useRef<HTMLInputElement>(null);
  const inputProps = getInputProps({ ...getDropdownProps({ preventKeyAction: isOpen, ref }) });

  const clearButtonConditions = {
    'has-value': inputProps.value,
    never: false,
    always: true,
  };
  const shouldShowClearButton = clearButtonConditions[clearButtonMode];
  const inputSize = size ?? autocompleteMultiselectSize;
  const isInputDisabled = isDisabled || autocompleteMultiSelectDisabled;

  const onReset = useCallback(() => {
    reset?.();
    ref?.current?.focus?.();
  }, []);

  const pointerEventsStyle = isInputDisabled ? { pointerEvents: 'none' } : {};

  const getIcon = () => {
    if (shouldShowClearButton) {
      return (
        <IconX
          data-testid="cmpsr.autocompleteMultiSelect.clear-button"
          cursor="pointer"
          onClick={onReset}
          style={pointerEventsStyle}
        />
      );
    }

    const IconComponent = isOpen ? IconChevronUp : IconChevronDown;
    const testId = isOpen ? 'cmpsr.autocompleteMultiSelect.chevron-up' : 'cmpsr.autocompleteMultiSelect.chevron-down';

    return (
      <IconComponent data-testid={testId} cursor="pointer" {...getToggleButtonProps({ style: pointerEventsStyle })} />
    );
  };

  const trailingIcon = getIcon();

  return <Input trailingIcon={trailingIcon} size={inputSize} isDisabled={isInputDisabled} {...inputProps} {...rest} />;
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

const defaultRenderSelectedItem = ({ selectedItem, removeSelectedItem, itemToString, size, isDisabled }) => {
  const tagSize = getTagSize(size) as ResponsiveValue<TagSize>;
  const itemString = (itemToString ? itemToString(selectedItem) : selectedItem) as string;
  return (
    <Tag size={tagSize} isDisabled={isDisabled}>
      <Tag.Label>{itemString}</Tag.Label>
      <Tag.RightIcon
        data-testid="cmpsr.autocompleteMultiSelect.clear-tag-button"
        as={IconX}
        onClick={removeSelectedItem}
      />
    </Tag>
  );
};

const AutocompleteMultiSelectSelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps> = ({
  renderSelectedItem = defaultRenderSelectedItem,
  isDisabled,
  ...rest
}) => {
  const {
    selectedItems,
    getSelectedItemProps,
    removeSelectedItem,
    itemToString,
    size,
    isDisabled: autocompleteMultiSelectDisabled,
  } = useAutocompleteMultiSelectContext();
  const isTagDisabled = isDisabled || autocompleteMultiSelectDisabled;
  const styles = useStyleConfig('AutocompleteMultiSelect') as Record<
    string,
    RecursiveCSSObject<StyleProps & { active: StyleProps; highlighted: StyleProps }>
  >;

  return selectedItems.length ? (
    <Box as="ul" {...rest} {...styles.selectedItems}>
      {selectedItems.map((selectedItem, index) => (
        <Box
          as="li"
          key={`selected-item-${index}`}
          {...styles.selectedItem}
          {...getSelectedItemProps({ selectedItem, index })}
        >
          {renderSelectedItem({
            selectedItem,
            removeSelectedItem: () => removeSelectedItem(selectedItem),
            itemToString,
            size,
            isDisabled: isTagDisabled,
          })}
        </Box>
      ))}
    </Box>
  ) : null;
};

AutocompleteMultiSelect.SelectedItems = AutocompleteMultiSelectSelectedItems;

const getTagSize = (size: ResponsiveValue<AutocompleteMultiSelectElementSize>) => (size === 'l' ? 'm' : 's');
