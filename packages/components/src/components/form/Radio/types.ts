import { RadioProps as ChakraRadioProps } from '@chakra-ui/react';

export const radioSizes = ['s', 'm', 'l'] as const;

export type RadioSize = typeof radioSizes[number];

export interface RadioProps extends Omit<ChakraRadioProps, 'variant'> {
  size?: RadioSize;
}
