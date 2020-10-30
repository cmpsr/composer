import { Shapes } from 'components/Components.types';
import { ChangeEvent } from 'react';
import { Modes } from 'components/primitives/Form/TextField/TextField.types';
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
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputMode?: Modes;
};
