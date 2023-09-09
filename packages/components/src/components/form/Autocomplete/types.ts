import { UseComboboxActions, UseComboboxPropGetters, UseComboboxProps } from 'downshift';
import { FC, ReactElement, ReactNode } from 'react';
import { InputProps } from '../Input';
import { BoxProps } from '../../layouts/Box';

export const autocompleteSizes = ['s', 'm', 'l'] as const;

export type AutocompleteSize = (typeof autocompleteSizes)[number];

export interface AutocompleteProps<Item = {}> extends UseComboboxProps<Item> {
  children: ReactNode;
  placeholder?: string;
  size?: AutocompleteSize;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  minCharsToShowList?: number;
}

export interface AutocompleteInputProps extends InputProps {
  showClearButton?: boolean;
  showClearButtonWhen?: 'item-selected' | 'has-value';
}

export interface AutocompleteListProps<Item = {}> extends BoxProps {
  noResultsContent?: ReactElement;
  renderItem: (item: Item) => ReactElement;
}

export interface AutocompleteStaticMembers<Item = {}> {
  Input: FC<AutocompleteInputProps>;
  List: FC<AutocompleteListProps<Item>>;
}

export type AutocompleteContextProps<Item = {}> = Partial<
  UseComboboxProps<Item> & UseComboboxPropGetters<Item> & UseComboboxActions<Item>
>;
