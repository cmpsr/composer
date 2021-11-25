import { ProgressProps as ChakraProgressProps } from '@chakra-ui/progress';

export const progressVariants = ['primary', 'second'] as const;
export type ProgressVariant = typeof progressVariants[number];

export interface ProgressProps extends ChakraProgressProps {
  variant?: ProgressVariant;
}
