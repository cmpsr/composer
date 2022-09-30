import { SpinnerProps as ChakraSpinnerProps } from '@chakra-ui/react';

export const spinnerVariants = ['accent', 'primary'] as const;
export type SpinnerVariant = typeof spinnerVariants[number];
export const spinnerSizes = ['xs', 's'] as const;
export type SpinnerSize = typeof spinnerSizes[number];

export interface SpinnerProps extends ChakraSpinnerProps {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
}
