import React, { FC, useCallback, useRef } from 'react';
import { useCombobox } from 'downshift';
import { createContext } from '@chakra-ui/react-utils';
import { RecursiveCSSObject, StyleProps, forwardRef, useMergeRefs, useStyleConfig } from '@chakra-ui/react';
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

const stateReducer = (minCharsToShowList = 0) => {
  return (_state, actionAndChanges) => {
    const { type, changes } = actionAndChanges;
    switch (type) {
      case useCombobox.stateChangeTypes.InputFocus:
      case useCombobox.stateChangeTypes.InputChange:
        // this prevents the menu from opening when the input value length is less than the minCharsToShowList.
        return {
          ...changes,
          isOpen: changes.inputValue?.length >= minCharsToShowList, // keep the menu open if the input value length is greater than the minCharsToShowList.
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
  minCharsToShowList,
  ...rest
}) => {
  const { isOpen, getMenuProps, getInputProps, getItemProps, selectedItem, highlightedIndex, reset } = useCombobox({
    items,
    onInputValueChange,
    stateReducer: stateReducer(minCharsToShowList),
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

const AutocompleteInput = forwardRef<AutocompleteInputProps, typeof Input>(
  ({ clearButtonMode = 'item-selected', ...rest }, ref) => {
    const { selectedItem, reset, getInputProps } = useAutocompleteContext();
    const internalRef = useRef<HTMLInputElement>(null);
    const inputProps = getInputProps({ ref: internalRef });
    const combinedRefs = useMergeRefs(internalRef, ref);
    const clearButtonConditions = {
      'item-selected': selectedItem,
      'has-value': inputProps.value,
      never: false,
      always: true,
    };
    const shouldShowClearButton = clearButtonConditions[clearButtonMode];

    const onReset = useCallback(() => {
      reset?.();
      internalRef?.current?.focus?.();
    }, []);

    return (
      <Input
        ref={combinedRefs}
        {...(shouldShowClearButton && {
          trailingIcon: <IconX data-testid="cmpsr.autocomplete.clear-button" cursor="pointer" onClick={onReset} />,
        })}
        {...inputProps}
        {...rest}
      />
    );
  }
);
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
