import { CssCustomizableProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = CssCustomizableProps & {
  children?: ReactNode;
  size?: Sizes;
};

export enum Sizes {
  Full = 'full',
  Screen = 'screen',
  Content = 'content',
}
