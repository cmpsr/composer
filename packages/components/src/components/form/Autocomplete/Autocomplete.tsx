import React, { FC } from 'react';
import { UseComboboxActions, UseComboboxPropGetters, UseComboboxProps, useCombobox } from 'downshift';
import { createContext } from '@chakra-ui/react-utils';
import { RecursiveCSSObject, StyleProps, useStyleConfig } from '@chakra-ui/react';
import { IconX } from '../../media';
import { Box } from '../../layouts/Box';
import { Input } from '../Input';
import { Text } from '../../typography';
import { AutocompleteProps, AutocompleteStaticMembers, AutocompleteInputProps, AutocompleteListProps } from './types';

const [AutocompleteProvider, useAutocompleteContext] = createContext<
  Partial<UseComboboxProps<any>> & Partial<UseComboboxPropGetters<any>> & Partial<UseComboboxActions<any>>
>({});

export const Autocomplete: FC<AutocompleteProps> & AutocompleteStaticMembers = ({
  children,
  items,
  onInputValueChange,
  ...rest
}) => {
  const { isOpen, getMenuProps, getInputProps, getItemProps, selectedItem, highlightedIndex, reset } = useCombobox({
    items,
    onInputValueChange,
    ...rest,
  });

  return (
    <AutocompleteProvider
      value={{ isOpen, items, getMenuProps, getInputProps, getItemProps, selectedItem, highlightedIndex, reset }}
    >
      <Box position="relative">{children}</Box>
    </AutocompleteProvider>
  );
};

const AutocompleteInput: FC<AutocompleteInputProps> = ({ showClearButton, ...rest }) => {
  const { selectedItem, reset, getInputProps } = useAutocompleteContext();
  return (
    <Input
      {...(showClearButton &&
        selectedItem && {
          trailingIcon: <IconX data-testid="cmpsr.autocomplete.clear-button" cursor="pointer" onClick={reset} />,
        })}
      {...getInputProps()}
      {...rest}
    />
  );
};
Autocomplete.Input = AutocompleteInput;

const AutocompleteList: FC<AutocompleteListProps> = ({ noResultsContent, renderItem, ...rest }) => {
  const { isOpen, items, selectedItem, highlightedIndex, getItemProps, getMenuProps } = useAutocompleteContext();
  const styles = useStyleConfig('Autocomplete') as Record<string, RecursiveCSSObject<StyleProps>>;
  const noResults = noResultsContent ?? <Text {...styles.noResults}>No results</Text>;

  return (
    <Box as="ul" visibility={isOpen ? 'visible' : 'hidden'} {...styles.list} {...getMenuProps()} {...rest}>
      {isOpen && items.length
        ? items.map((item: any, index: number) => (
            <Box
              as="li"
              key={index}
              {...styles.item}
              {...(item === selectedItem && {
                ...styles.activeItem,
              })}
              {...(highlightedIndex === index && {
                ...styles.highlightedItem,
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
Autocomplete.List = AutocompleteList;
