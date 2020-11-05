import {
  ChangeEvent,
  ReactNode,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { Modes } from 'components/primitives/Form/TextField/TextField.types';
import { CssCustomizableProps, Shapes } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  shape?: Shapes;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputMode?: Modes;
  children?: ReactNode;
};

export type Type = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>
> & {
  Shapes?: typeof Shapes;
  Modes?: typeof Modes;
};
