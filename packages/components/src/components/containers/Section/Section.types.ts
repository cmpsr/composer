import { CssCustomizableProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = CssCustomizableProps & {
  children?: ReactNode;
};
