import { NumberInputProps as ChakraNumberInputProps } from '@chakra-ui/react';
import { InputSize, InputVariant } from '../Input/types';

export interface NumberInputProps extends ChakraNumberInputProps {
  variant?: InputVariant;
  size?: InputSize;
}
