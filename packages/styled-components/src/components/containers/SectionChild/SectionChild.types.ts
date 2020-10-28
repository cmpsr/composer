import { ReactNode } from 'react';
import { CssCustomizableProps } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  children?: ReactNode;
};
