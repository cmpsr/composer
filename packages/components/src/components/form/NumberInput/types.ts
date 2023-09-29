import { NumberInputProps as ChakraNumberInputProps, ResponsiveValue } from '@chakra-ui/react';
import { InputSize, InputVariant } from '../Input/types';

export interface NumberInputProps extends ChakraNumberInputProps {
  variant?: ResponsiveValue<InputVariant>;
  size?: ResponsiveValue<InputSize>;
}
