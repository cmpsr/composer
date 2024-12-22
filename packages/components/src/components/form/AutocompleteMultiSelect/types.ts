import {
  UseComboboxActions,
  UseComboboxPropGetters,
  UseComboboxProps,
  UseMultipleSelectionActions,
  UseMultipleSelectionPropGetters,
  UseMultipleSelectionProps,
} from 'downshift';
import { FC, ReactElement, ReactNode } from 'react';
import { BoxProps } from '../../layouts/Box';
import { InputProps } from '../Input';
import { ResponsiveValue } from '@chakra-ui/react';

export const autocompleteMultiSelectSizes = ['s', 'm', 'l'];

export type AutocompleteMultiSelectElementSize = (typeof autocompleteMultiSelectSizes)[number];

export interface AutocompleteMultiSelectProps<Item = object> {
  items: Item[];
  size?: ResponsiveValue<AutocompleteMultiSelectElementSize>;
  itemToString?: (item: Item) => string;
  children: ReactNode;
  useComboboxProps?: UseComboboxProps<Item>;
  useMultipleSelectionProps?: UseMultipleSelectionProps<Item>;
  isDisabled?: boolean;
}

export interface AutocompleteMultiSelectListProps<Item = object> extends BoxProps {
  noResultsContent?: ReactElement;
  renderItem: (item: Item) => ReactElement;
}

export interface AutocompleteMultiSelectSelectedItemsProps<Item = object> extends BoxProps {
  renderSelectedItem?: ({
    selectedItem,
    removeSelectedItem,
    size,
    isDisabled,
    itemToString,
  }: {
    selectedItem: Item;
    removeSelectedItem: (item: Item) => void;
    size?: ResponsiveValue<AutocompleteMultiSelectElementSize>;
    isDisabled?: boolean;
    itemToString?: (item: Item) => string;
  }) => ReactElement;
  isDisabled?: boolean;
}

export interface AutocompleteMultiSelectInputProps extends InputProps {
  clearButtonMode?: 'has-value' | 'never' | 'always';
}

export interface AutocompleteMultiSelectStaticMembers<Item = object> {
  Input: FC<AutocompleteMultiSelectInputProps>;
  List: FC<AutocompleteMultiSelectListProps<Item>>;
  SelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps<Item>>;
}

export type AutocompleteMultiSelectContextProps<Item = object> = Partial<
  UseComboboxProps<Item> &
    UseComboboxPropGetters<Item> &
    UseComboboxActions<Item> &
    UseMultipleSelectionProps<Item> &
    UseMultipleSelectionActions<Item> &
    UseMultipleSelectionPropGetters<Item>
> & { size: ResponsiveValue<AutocompleteMultiSelectElementSize>; isDisabled?: boolean };

export interface GetFilteredItemsParams<Item> {
  selectedItems: Item[];
  inputValue: string;
  items: Item[];
  itemToString: (item: Item) => string;
}
