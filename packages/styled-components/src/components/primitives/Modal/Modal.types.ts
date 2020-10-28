import { ReactNode } from 'react';
import { Shapes } from 'components/Components.types';

export type Props = {
  customCss?: string;
  overlayCustomCss?: string;
  onClick?: () => void;
  shape?: Shapes;
  isOpen?: boolean;
  children?: ReactNode;
  showCloseButton?: boolean;
  testId?: string;
};
