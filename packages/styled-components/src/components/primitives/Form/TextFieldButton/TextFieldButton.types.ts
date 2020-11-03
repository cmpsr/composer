import { ChangeEvent } from 'react';
import { CssCustomizableProps } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  ariaLabel?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  buttonLabel?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};
