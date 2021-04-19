import { CssCustomizableProps } from 'components/Components.types';
import { ChangeEvent } from 'react';

export type Props = CssCustomizableProps & {
  name?: string;
  checked?: boolean;
  ariaLabel?: string;
  label?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
