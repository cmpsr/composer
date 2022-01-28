import { ProgressProps as ChakraProgressProps } from '@chakra-ui/progress';

export const progressSizes = ['xs', 's', 'm', 'l', 'xl'] as const;
type ProgressSize = typeof progressSizes[number];

export interface ProgressProps extends ChakraProgressProps {
  size?: ProgressSize;
}
