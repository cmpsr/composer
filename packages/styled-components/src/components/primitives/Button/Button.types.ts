import { ReactNode } from 'react';
import { Shapes } from 'components/Components.types';

export enum Types {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum HtmlTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset'
}

export type Props = {
  children?: ReactNode;
  className?: string;
  onClick?: (...args: any[]) => void;
  type?: Types;
  htmlType?: HtmlTypes;
  testId?: string;
  disabled?: boolean;
  shape?: Shapes;
};
