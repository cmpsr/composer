import {
  ChangeEvent,
  ForwardRefExoticComponent,
  RefAttributes,
  PropsWithoutRef,
} from 'react';
import { CssCustomizableProps, Shapes } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  value?: string;
  name: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  shape?: Shapes;
};

export type Type = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLTextAreaElement>
> & {
  Shapes?: typeof Shapes;
};
