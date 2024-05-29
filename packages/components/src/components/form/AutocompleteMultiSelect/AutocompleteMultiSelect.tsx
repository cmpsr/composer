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
import { Tag } from '../../dataDisplay';
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
  size,
  ...rest
}) => {
  const {
    reset,
    getInputProps,
    getToggleButtonProps,
    getDropdownProps,
    isOpen,
    size: autocompleteMultiselectSize,
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

  const onReset = useCallback(() => {
    reset?.();
    ref?.current?.focus?.();
  }, []);

  return (
    <Input
      trailingIcon={
        shouldShowClearButton ? (
          <IconX data-testid="cmpsr.autocompleteMultiSelect.clear-button" cursor="pointer" onClick={onReset} />
        ) : isOpen ? (
          <IconChevronUp
            data-testid="cmpsr.autocompleteMultiSelect.chevron-up"
            cursor="pointer"
            {...getToggleButtonProps()}
          />
        ) : (
          <IconChevronDown
            data-testid="cmpsr.autocompleteMultiSelect.chevron-down"
            cursor="pointer"
            {...getToggleButtonProps()}
          />
        )
      }
      size={inputSize}
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

const defaultRenderSelectedItem = (selectedItem, removeSelectedItem, size) => (
  <Tag size={size}>
    <Tag.Label>{selectedItem}</Tag.Label>
    <Tag.RightIcon
      data-testid="cmpsr.autocompleteMultiSelect.clear-tag-button"
      as={IconX}
      onClick={removeSelectedItem}
    />
  </Tag>
);

const AutocompleteMultiSelectSelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps> = ({
  renderSelectedItem = defaultRenderSelectedItem,
  ...rest
}) => {
  const { selectedItems, getSelectedItemProps, removeSelectedItem, size } = useAutocompleteMultiSelectContext();
  const styles = useStyleConfig('AutocompleteMultiSelect') as Record<
    string,
    RecursiveCSSObject<StyleProps & { active: StyleProps; highlighted: StyleProps }>
  >;
  const tagSize = getTagSize(size);

  return selectedItems.length ? (
    <Box as="ul" {...rest} {...styles.selectedItems}>
      {selectedItems.map((selectedItem, index) => (
        <Box as="li" key={`selected-item-${index}`} {...getSelectedItemProps({ selectedItem, index })}>
          {renderSelectedItem(selectedItem, () => removeSelectedItem(selectedItem), tagSize)}
        </Box>
      ))}
    </Box>
  ) : null;
};

AutocompleteMultiSelect.SelectedItems = AutocompleteMultiSelectSelectedItems;

// const getTagSize = (size: React.ReactElement<IconProps>) => {
//   const size = 'xs';

//   if (!React.isValidElement(icon)) {
//     return null;
//   }

//   return React.cloneElement(icon, { size } as Partial<IconProps>);
// };

const getTagSize = (size: ResponsiveValue<AutocompleteMultiSelectElementSize>) => (size === 'l' ? 'm' : size);
