import { ProgressProps as ChakraProgressBarProps } from '@chakra-ui/progress';
import { ResponsiveValue } from '@chakra-ui/react';

export const progressBarSizes = ['xs', 's', 'm', 'l', 'xl'] as const;
type ProgressBarSize = (typeof progressBarSizes)[number];

export interface ProgressBarProps extends ChakraProgressBarProps {
  size?: ResponsiveValue<ProgressBarSize>;
  isRound?: boolean;
}
