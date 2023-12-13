import { MaskitoMask } from '@maskito/core';
import { InputProps } from '../Input';

export interface MaskInputProps extends InputProps {
  maskOptions?: MaskOptions;
}

export type MaskOptions = {
  mask: MaskitoMask;
  prefix?: string;
  postfix?: string;
  caretPositioning?: boolean;
};
