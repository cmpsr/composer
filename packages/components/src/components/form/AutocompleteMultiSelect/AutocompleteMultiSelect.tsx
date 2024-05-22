// la interfaz de items debe ser genérico
// no puede haber nada relacionado con label/value en el código
// eliminar los ts-ignore
// ui...
// mirar que no haya errores en la consola

import React, { FC, useMemo, useRef, useState, useCallback } from 'react';
import { useMultipleSelection, useCombobox } from 'downshift';
import {
  AutocompleteMultiSelectContextProps,
  AutocompleteMultiSelectListProps,
  AutocompleteMultiSelectProps,
  AutocompleteMultiSelectSelectedItemsProps,
} from './types';
import { createContext } from '@chakra-ui/react-utils';
import { InputProps, Input } from '../Input';
import { Box } from '../../layouts/Box';
import { Text } from '@components/typography';
import { IconChevronDown, IconChevronUp, IconX } from '@components/media';
import { RecursiveCSSObject, StyleProps, useStyleConfig } from '@chakra-ui/react';

const [AutocompleteMultiSelectProvider, useAutocompleteMultiSelectContext] =
  createContext<AutocompleteMultiSelectContextProps>({});

export const AutocompleteMultiSelect: FC<AutocompleteMultiSelectProps> = ({
  children,
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
    onStateChange: (changes) => {
      if ('selectedItems' in changes && 'type' in changes) {
        // @ts-ignore
        const { type, selectedItem } = changes;
        switch (type) {
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            if (selectedItem) {
              // @ts-ignore
              setSelectedItems((currentSelectedItems) => currentSelectedItems.filter((item) => item !== selectedItem));
            }
            break;
          case useMultipleSelection.stateChangeTypes.FunctionAddSelectedItem:
            // Verificar contra todos los seleccionados antes de añadir
            if (selectedItem && !selectedItems.find((item) => item === selectedItem)) {
              // @ts-ignore
              setSelectedItems((currentSelectedItems) => [...currentSelectedItems, selectedItem]);
              setInputValue('');
            }
            break;
          default:
            break;
        }
      }
    },
    ...useMultipleSelectionProps,
  });

  const { items: defaultItems = [] } = useComboboxProps;

  const getFilteredItems = (selectedItems, inputValue) => {
    const lowerCasedInputValue = inputValue.toLowerCase();
    return defaultItems.filter(
      (item) =>
        !selectedItems.includes(item) &&
        // @ts-ignore
        item?.toLowerCase().includes(lowerCasedInputValue)
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
    inputValue,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem && !selectedItems.includes(selectedItem)) {
        // @ts-ignore
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
        setInputValue(''); // Reset input value when an item is selected
      }
    },
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
        // @ts-ignore
        selectedItems,
        removeSelectedItem,
        getSelectedItemProps,
        getDropdownProps,
        // TODO: Check why is not working when we import it from useCombobox
        reset: () => setInputValue(''),
      }}
    >
      {children}
    </AutocompleteMultiSelectProvider>
  );
};

const AutocompleteMultiSelectInput: FC<InputProps> = ({ clearButtonMode = 'has-value', ...rest }) => {
  // @ts-ignore
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
    // @ts-ignore
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

//@ts-ignore
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
//@ts-ignore
AutocompleteMultiSelect.List = AutocompleteMultiSelectList;

const AutocompleteMultiSelectSelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps> = ({
  renderSelectedItem,
  ...rest
}) => {
  //@ts-ignore
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
//@ts-ignore
AutocompleteMultiSelect.SelectedItems = AutocompleteMultiSelectSelectedItems;
