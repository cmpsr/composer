import { SelectProps as ChakraSelectProps } from '@chakra-ui/react';

export const selectSizes = ['s', 'm', 'l'] as const;
export const iconSizes = ['xs', 's', 'm', 'l'] as const;

export type SelectSize = typeof selectSizes[number];
export type SelectIconSize = typeof iconSizes[number];

export interface SelectProps extends ChakraSelectProps {
  size?: SelectSize;
  iconSize?: SelectIconSize;
}
