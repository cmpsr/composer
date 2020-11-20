import { ReactNode } from 'react';
import { CssCustomizableProps, Shapes } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  overlayCustomCss?: string;
  overlayClassName?: string;
  onClick?: () => void;
  onClose?: () => void;
  shape?: Shapes;
  isOpen?: boolean;
  children?: ReactNode;
  showCloseButton?: boolean;
};
