import { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

export const selectSizes = ['s', 'm', 'l'] as const;
export const selectVariants = ['outline', 'flushed'] as const;

export type SelectSize = typeof selectSizes[number];
export type SelectVariant = typeof selectVariants[number];

export interface SelectProps extends ChakraSelectProps {
  size?: SelectSize;
  variant?: SelectVariant;
}
