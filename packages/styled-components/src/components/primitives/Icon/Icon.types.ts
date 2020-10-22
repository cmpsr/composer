import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
  width?: number;
  height?: number;
  className?: string;
  testId?: string;
  viewBoxHeight?: number;
  viewBoxWidth?: number;
};

export type SvgProps = {
  type: Types;
};

export enum Types {
  Filled = 'filled',
  Outlined = 'outlined',
  Rounded = 'rounded',
}
