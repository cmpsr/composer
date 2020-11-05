import { Shapes } from 'components/Components.types';
import { ChangeEvent } from 'react';
import {
  CssCustomizableProps,
  IconPositions,
} from 'components/Components.types';
import { Modes } from 'components/primitives/Form/TextField/TextField.types';

export type Props = CssCustomizableProps & {
  shape?: Shapes;
  iconPosition?: IconPositions;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  icon?: React.ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  invalid?: boolean;
  inputMode?: Modes;
  wrapperCustomCss?: string;
  wrapperClassName?: string;
};
