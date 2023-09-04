import React, { FC } from 'react';
import { useCombobox } from 'downshift';
import { createContext } from '@chakra-ui/react-utils';
import { RecursiveCSSObject, StyleProps, useStyleConfig } from '@chakra-ui/react';
import { IconX } from '../../media';
import { Box } from '../../layouts/Box';
import { Input } from '../Input';
import { Text } from '../../typography';
import {
  AutocompleteProps,
  AutocompleteInputProps,
  AutocompleteListProps,
  AutocompleteStaticMembers,
  AutocompleteContextProps,
} from './types';

const [AutocompleteProvider, useAutocompleteContext] = createContext<AutocompleteContextProps>({});

const stateReducer = (expectedCharLengthToOpen = 0) => {
  return (state, actionAndChanges) => {
    const { type, changes } = actionAndChanges;
    switch (type) {
      case useCombobox.stateChangeTypes.InputFocus:
      case useCombobox.stateChangeTypes.InputChange:
        // this prevents the menu from opening when the input value length is less than the expectedCharLengthToOpen.
        return {
          ...changes,
          isOpen: changes.inputValue?.length >= expectedCharLengthToOpen, // keep the menu open if the input value length is greater than the expectedCharLengthToOpen.
        };
      default:
        return changes; // otherwise business as usual.
    }
  };
};

export const Autocomplete: FC<AutocompleteProps> & AutocompleteStaticMembers = ({
  children,
  items,
  onInputValueChange,
  expectedCharLengthToOpen,
  ...rest
}) => {
  const { isOpen, getMenuProps, getInputProps, getItemProps, selectedItem, highlightedIndex, reset } = useCombobox({
    items,
    onInputValueChange,
    stateReducer: stateReducer(expectedCharLengthToOpen),
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
  const styles = useStyleConfig('Autocomplete') as Record<
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
Autocomplete.List = AutocompleteList;
