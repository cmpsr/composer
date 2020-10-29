import { Shapes } from 'components/Components.types';
import { ChangeEvent } from 'react';
import { CssCustomizableProps } from 'components/Components.types';

export type Props = CssCustomizableProps & {
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
  inputMode?: Modes;
};

export enum Modes {
  Text = 'text',
  Decimal = 'decimal',
  Numeric = 'numeric',
  Tel = 'tel',
  Search = 'search',
  Email = 'email',
  Url = 'url'
}
