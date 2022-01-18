import { RadioProps as ChakraRadioProps } from '@chakra-ui/react';

export const radioVariants = [
  'default',
] as const;
export type RadioVariant = typeof radioVariants[number];
export const RadioSizes = ['sm', 'md', 'lg'] as const;
export type RadioSize = typeof RadioSizes[number];

export interface RadioProps extends ChakraRadioProps {
  variant?: RadioVariant;
  size?: RadioSize;
}
