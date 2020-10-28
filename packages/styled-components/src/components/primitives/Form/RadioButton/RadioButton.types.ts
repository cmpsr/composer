import { ChangeEvent } from 'react';
import { CssCustomizableProps } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  name?: string;
  value?: string;
  checked?: boolean;
  ariaLabel?: string;
  label?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
