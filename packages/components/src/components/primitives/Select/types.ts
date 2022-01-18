import { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

export const selectSizes = ['s', 'm', 'l'] as const;
export const selectStates = [
  'default',
  'hover',
  'error',
  'disabled',
  'focus',
] as const;

export type SelectSize = typeof selectSizes[number];
export type SelectState = typeof selectStates[number];

export interface SelectProps extends ChakraSelectProps {
  size?: SelectSize;
  error?: boolean;
}
