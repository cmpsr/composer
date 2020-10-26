import { ReactNode } from 'react';

export type Props = {
  place?: Places;
  element: ReactNode;
  tooltip: ReactNode;
  className?: string;
  backgroundColor?: string;
  testId?: string;
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
