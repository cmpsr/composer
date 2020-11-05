import { BaseProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = BaseProps & {
  place?: Places;
  element: ReactNode;
  tooltip: ReactNode;
  backgroundColor?: string;
};

export enum BackgroundColors {
  Primary900 = 'primary900',
  Primary100 = 'primary100',
}

export enum Places {
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
  Top = 'top',
}
