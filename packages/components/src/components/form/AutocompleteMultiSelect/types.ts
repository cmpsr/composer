import {
  UseComboboxActions,
  UseComboboxPropGetters,
  UseComboboxProps,
  UseMultipleSelectionActions,
  UseMultipleSelectionPropGetters,
  UseMultipleSelectionProps,
} from 'downshift';
import { FC, ReactElement, ReactNode } from 'react';
// import { ResponsiveValue } from '@chakra-ui/react';
import { BoxProps } from '../../layouts/Box';
import { InputProps } from '../Input';

export const autocompleteMultiSelectSizes = ['s', 'm', 'l'];

export type AutocompleteMultiSelectElementSize = (typeof autocompleteMultiSelectSizes)[number];

export interface AutocompleteMultiSelectProps<Item = {}> {
  items: Item[];
  itemToString?: (item: Item) => string;
  children: ReactNode;
  useComboboxProps?: UseComboboxProps<Item>;
  useMultipleSelectionProps?: UseMultipleSelectionProps<Item>;
}

export interface AutocompleteMultiSelectListProps<Item = {}> extends BoxProps {
  noResultsContent?: ReactElement;
  renderItem: (item: Item) => ReactElement;
}

export interface AutocompleteMultiSelectSelectedItemsProps<Item = {}> extends BoxProps {
  renderSelectedItem?: (item: Item, removeSelectedItem: () => void) => ReactElement;
}

export interface AutocompleteMultiSelectInputProps extends InputProps {
  clearButtonMode?: 'has-value' | 'never' | 'always';
}

export interface AutocompleteMultiSelectStaticMembers<Item = {}> {
  Input: FC<AutocompleteMultiSelectInputProps>;
  List: FC<AutocompleteMultiSelectListProps<Item>>;
  SelectedItems: FC<AutocompleteMultiSelectSelectedItemsProps<Item>>;
}

export type AutocompleteMultiSelectContextProps<Item = {}> = Partial<
  UseComboboxProps<Item> &
    UseComboboxPropGetters<Item> &
    UseComboboxActions<Item> &
    UseMultipleSelectionProps<Item> &
    UseMultipleSelectionActions<Item> &
    UseMultipleSelectionPropGetters<Item>
>;
