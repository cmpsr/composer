import { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

export const selectSizes = ['s', 'm', 'l'] as const;

export type SelectSize = typeof selectSizes[number];

export interface SelectProps extends ChakraSelectProps {
  size?: SelectSize;
}
