import { ChangeEvent, ReactNode } from 'react';
import {
  CssCustomizableProps,
  IconPositions,
} from 'components/Components.types';

export type Props = CssCustomizableProps & {
  className?: string;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  type?: string;
  value?: string | number;
  iconPosition?: IconPositions;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  buttonContent?: ReactNode;
  icon?: ReactNode;
};
