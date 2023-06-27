import { UseComboboxProps } from 'downshift';
import { FC, ReactElement, ReactNode } from 'react';
import { InputProps } from '../Input';
import { BoxProps } from '../../layouts/Box';

export const autocompleteSizes = ['s', 'm', 'l'] as const;

export type AutocompleteSize = (typeof autocompleteSizes)[number];

export interface AutocompleteProps extends UseComboboxProps<any> {
  children: ReactNode;
  placeholder?: string;
  size?: AutocompleteSize;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}

export interface AutocompleteInputProps extends InputProps {
  showClearButton?: boolean;
}

export interface AutocompleteListProps extends BoxProps {
  noResultsContent?: ReactElement;
  renderItem: (item: any) => ReactElement;
}

export interface AutocompleteStaticMembers {
  Input: FC<AutocompleteInputProps>;
  List: FC<AutocompleteListProps>;
}
