import { UseComboboxActions, UseComboboxPropGetters, UseComboboxProps, UseMultipleSelectionProps } from 'downshift';
import { FC, ReactElement, ReactNode } from 'react';
import { InputProps } from '../Input';
import { BoxProps } from '../../layouts/Box';
import { ResponsiveValue } from '@chakra-ui/react';

export const autocompleteMultiSelectSizes = ['s', 'm', 'l'];

export type AutocompleteMultiSelectSize = (typeof autocompleteMultiSelectSizes)[number];

export interface AutocompleteMultiSelectProps<Item = {}> {
  // items: Item[];
  children: ReactNode;
  placeholder?: string;
  size?: ResponsiveValue<AutocompleteMultiSelectSize>;
  trailingIcon?: ReactElement;
  minCharsToShowList?: number;
  useComboboxProps?: UseComboboxProps<Item>;
  useMultipleSelectionProps?: UseMultipleSelectionProps<Item>;
}

// export interface AutocompleteMultiSelectInputProps extends InputProps {
//   clearButtonMode?: 'item-selected' | 'has-value' | 'never' | 'always';
// }

// export interface AutocompleteMultiSelectListProps<Item = {}> extends BoxProps {
//   noResultsContent?: ReactElement;
//   renderItem: (item: Item) => ReactElement;
// }

// export interface AutocompleteMultiSelectStaticMembers<Item = {}> {
//   Input: FC<AutocompleteMultiSelectInputProps>;
//   List: FC<AutocompleteMultiSelectListProps<Item>>;
// }

// export type AutocompleteMultiSelectContextProps<Item = {}> = Partial<
//   UseComboboxProps<Item> & UseComboboxPropGetters<Item> & UseComboboxActions<Item>
// >;
