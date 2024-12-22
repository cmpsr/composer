import { UseComboboxActions, UseComboboxPropGetters, UseComboboxProps } from 'downshift';
import { FC, ReactElement, ReactNode } from 'react';
import { InputProps } from '../Input';
import { BoxProps } from '../../layouts/Box';
import { ResponsiveValue } from '@chakra-ui/react';

export const autocompleteSizes = ['s', 'm', 'l'] as const;

export type AutocompleteSize = (typeof autocompleteSizes)[number];

export interface AutocompleteProps<Item = object> extends UseComboboxProps<Item> {
  children: ReactNode;
  placeholder?: string;
  size?: ResponsiveValue<AutocompleteSize>;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  minCharsToShowList?: number;
}

export interface AutocompleteInputProps extends InputProps {
  clearButtonMode?: 'item-selected' | 'has-value' | 'never' | 'always';
}

export interface AutocompleteListProps<Item = object> extends BoxProps {
  noResultsContent?: ReactElement;
  renderItem: (item: Item) => ReactElement;
}

export interface AutocompleteStaticMembers<Item = object> {
  Input: FC<AutocompleteInputProps>;
  List: FC<AutocompleteListProps<Item>>;
}

export type AutocompleteContextProps<Item = object> = Partial<
  UseComboboxProps<Item> & UseComboboxPropGetters<Item> & UseComboboxActions<Item>
>;
