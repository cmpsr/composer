import { ChangeEvent } from 'react';
import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  name?: string;
  value?: string;
  checked?: boolean;
  ariaLabel?: string;
  label?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
