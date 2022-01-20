import { InputProps as ChakraInputProps } from '@chakra-ui/react';

export const inputVariants = ['outline', 'flushed'] as const;
export const inputSizes = ['s', 'm', 'l'] as const;

type InputVariant = typeof inputVariants[number];
type InputSize = typeof inputSizes[number];

export interface InputProps extends ChakraInputProps {
  variant?: InputVariant;
  size?: InputSize;
  showTrailingIcon?: boolean;
  trailingIcon?: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
}
