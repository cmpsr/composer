import { BaseProps } from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = BaseProps & {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
