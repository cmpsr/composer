import { ReactNode } from 'react';

export enum Types {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum HtmlTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export enum Shapes {
  Rounded = 'rounded',
  SemiRounded = 'semiRounded',
  Rectangle = 'rectangle',
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
