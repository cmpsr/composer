import { ReactNode } from 'react';
import { CssCustomizableProps, Shapes } from 'components/Components.types';

export enum Types {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum HtmlTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export type Props = CssCustomizableProps & {
  children?: ReactNode;
  onClick?: (...args: any[]) => void;
  type?: Types;
  htmlType?: HtmlTypes;
  disabled?: boolean;
  shape?: Shapes;
};
