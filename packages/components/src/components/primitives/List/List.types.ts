import { BaseProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = BaseProps & {
  children?: ReactNode;
  columns?: number;
  tag?: Tags;
};

export enum Tags {
  Div = 'div',
  Ul = 'ul',
}
