import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
  className?: string;
  size?: Sizes;
  customCss?: string;
  testId?: string;
};

export enum Sizes {
  Full = 'full',
  Screen = 'screen',
  Content = 'content',
}
