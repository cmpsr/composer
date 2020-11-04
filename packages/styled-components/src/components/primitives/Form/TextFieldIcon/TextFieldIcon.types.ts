import {
  CssCustomizableProps,
  IconPositions,
} from 'components/Components.types';
import { ChangeEvent } from 'react';

export type Props = CssCustomizableProps & {
  iconPosition?: IconPositions;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
};
