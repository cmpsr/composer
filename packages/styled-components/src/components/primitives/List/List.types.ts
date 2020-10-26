import { ReactNode } from 'react';

export enum Tags {
  Div = 'div',
  Ul = 'ul',
}

export type Props = {
  className?: string;
  children?: ReactNode;
  columns?: number;
  tag?: Tags;
  testId?: string;
};
