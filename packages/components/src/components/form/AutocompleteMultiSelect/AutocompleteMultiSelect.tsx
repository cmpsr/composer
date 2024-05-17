// la interfaz de items debe ser genérico
// no puede haber nada relacionado con label/value en el código
// eliminar los ts-ignore
// modular el componente
// ui...

import React, { FC, useRef, useState } from 'react';
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
import { IconChevronDown } from '@components/media';

const [AutocompleteMultiSelectProvider, useAutocompleteMultiSelectContext] =
  createContext<AutocompleteMultiSelectContextProps>({});

export const AutocompleteMultiSelect: FC<AutocompleteMultiSelectProps> = ({
  // items,
  children,
  useComboboxProps,
  useMultipleSelectionProps,
}) => {
  const [inputValue, setInputValue] = useState('');

  //Gestiona los elementos seleccionados, permitiendo añadir o quitar elementos mediante el teclado o programáticamente. Se configura para actualizar el estado de selectedItems cuando se eliminan elementos.
  const { selectedItems, addSelectedItem, removeSelectedItem, setSelectedItems, getSelectedItemProps } =
    useMultipleSelection({
      onStateChange: (changes) => {
        if ('selectedItems' in changes && 'type' in changes) {
          // @ts-ignore
          const { type, selectedItem } = changes;
          switch (type) {
            case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
              if (selectedItem) {
                // @ts-ignore
                setSelectedItems((currentSelectedItems) =>
                  currentSelectedItems.filter((item) => item.id !== selectedItem.id)
                );
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

  // Gestiona la interacción con el menú desplegable. Controla el estado de apertura del menú, el ítem destacado, y las actualizaciones del campo de entrada. También se configura para manejar la selección de ítems y cerrar el menú tras la selección, manteniendo el primer ítem siempre destacado.

  const {
    isOpen,
    selectItem: selectedItemCombobox,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
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

  // const onReset = useCallback(() => {
  //   reset?.();
  //   ref?.current?.focus?.();
  // }, []);

  return (
    <AutocompleteMultiSelectProvider
      value={{
        isOpen,
        items: useComboboxProps.items,
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
      }}
    >
      {children}
    </AutocompleteMultiSelectProvider>
  );
};

const AutocompleteMultiSelectInput: FC<InputProps> = (props) => {
  const { getInputProps, getToggleButtonProps } = useAutocompleteMultiSelectContext();
  const ref = useRef<HTMLInputElement>(null);
  const inputProps = getInputProps({ ref });

  return (
    <Input trailingIcon={<IconChevronDown cursor="pointer" {...getToggleButtonProps()} />} {...inputProps} {...props} />
  );
};
//@ts-ignore
AutocompleteMultiSelect.Input = AutocompleteMultiSelectInput;

const AutocompleteMultiSelectList: FC<AutocompleteMultiSelectListProps> = ({
  noResultsContent,
  renderItem,
  ...rest
}) => {
  const { isOpen, items, getItemProps, getMenuProps } = useAutocompleteMultiSelectContext();

  // TODO: Implementar estilos
  // const styles = useStyleConfig('Autocomplete') as Record<
  //   string,
  //   RecursiveCSSObject<StyleProps & { active: StyleProps; highlighted: StyleProps }>
  // >;
  // const noResults = noResultsContent ?? <Text {...styles.noResults}>No results</Text>;
  const noResults = noResultsContent ?? <Text>No results</Text>;

  return (
    // <Box as="ul" visibility={isOpen ? 'visible' : 'hidden'} {...styles.list} {...getMenuProps()} {...rest}>
    <Box as="ul" visibility={isOpen ? 'visible' : 'hidden'} {...getMenuProps()} {...rest}>
      {isOpen && items.length
        ? items.map((item, index: number) => (
            <Box
              as="li"
              key={index}
              // {...styles.item}
              // {...(item === selectedItem && {
              //   ...styles.item.active,
              // })}
              // {...(highlightedIndex === index && {
              //   ...styles.item.highlighted,
              // })}
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

  return selectedItems.length ? (
    <Box as="ul" {...rest}>
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
