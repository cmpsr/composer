import { CssCustomizableProps, Shapes } from 'components/Components.types';
import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type Props = CssCustomizableProps & {
  placeholder: string;
  onChange: (value: string) => void;
  shape?: Shapes;
};

export type Type = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>
> & {
  Shapes?: typeof Shapes;
};
