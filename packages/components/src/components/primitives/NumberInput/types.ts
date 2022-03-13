import { NumberInputProps as ChackraNumberInputProps } from '@chakra-ui/react';
import { InputSize, InputVariant } from '../Input/types';

export interface NumberInputProps extends ChackraNumberInputProps {
  variant?: InputVariant;
  size?: InputSize;
}
