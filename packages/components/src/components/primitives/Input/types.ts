import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const inputVariants = ['outline', 'flushed'] as const;
export const inputSizes = ['s', 'm', 'l'] as const;

export type InputVariant = typeof inputVariants[number];
export type InputSize = typeof inputSizes[number];

export interface InputProps extends ChakraInputProps {
  variant?: InputVariant;
  size?: InputSize;
  leadingIcon?: ReactElement;
  leftLabel?: string;
  rightLabel?: string;
}
