import {
  ChangeEvent,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { CssCustomizableProps, Shapes } from 'components/Components.types';
import { Modes } from 'components/primitives/Form/TextField/TextField.types';

export type Props = CssCustomizableProps & {
  textFieldClassName?: string;
  labelClassName?: string;
  shape?: Shapes;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  type?: string;
  maxLength?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  inputMode?: Modes;
  labelCustomCss?: string;
  textFieldCustomCss?: string;
};

export type Type = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>
> & {
  Shapes?: typeof Shapes;
  Modes?: typeof Modes;
};
