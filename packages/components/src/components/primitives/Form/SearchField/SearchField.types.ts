import {
  ChangeEvent,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import {
  CssCustomizableProps,
  Shapes,
  IconPositions,
} from 'components/Components.types';

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

export type Type = ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>
> & {
  IconPositions?: typeof IconPositions;
  Shapes?: typeof Shapes;
};
