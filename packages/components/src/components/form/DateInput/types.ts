import { MaskitoDateMode } from '@maskito/kit';
import { InputProps } from '../Input';

export interface DateInputProps extends InputProps {
  maskOptions?: DateMaskOptions;
}

export type DateMaskOptions = {
  mode?: MaskitoDateMode;
  placeholder?: string;
  separator?: string;
  showPlaceholderOnFocusOnly?: boolean;
};
