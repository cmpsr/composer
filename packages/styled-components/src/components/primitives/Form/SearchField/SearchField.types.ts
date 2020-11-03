import {
  ChangeEvent,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { CssCustomizableProps, Shapes } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  shape?: Shapes;
  iconPosition?: IconPositions;
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export enum IconPositions {
  Left = 'left',
  Right = 'right',
}

export type Type = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>
> & {
  IconPositions?: typeof IconPositions;
  Shapes?: typeof Shapes;
};
