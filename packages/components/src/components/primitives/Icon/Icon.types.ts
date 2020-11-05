import { BaseProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = BaseProps & {
  children?: ReactNode;
  width?: number;
  height?: number;
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
