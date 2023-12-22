import { FC } from 'react';
import {
  StepIndicator,
  StepProps,
  StepSeparator,
  StepStatus,
  StepperProps as ChakraStepperProps,
} from '@chakra-ui/react';
import { Text, TextProps } from '../../typography';
import { IconProps } from '../../media';

export interface StepperProps extends Omit<ChakraStepperProps, 'colorScheme' | 'size' | 'variant'> {
  colorScheme?: never;
  size?: never;
  variant?: never;
}

export interface StepStaticMembers {
  Icon: FC<IconProps>;
  Indicator: typeof StepIndicator;
  Number: FC<TextProps>;
  Separator: typeof StepSeparator;
  Status: typeof StepStatus;
  Title: typeof Text;
  Description: typeof Text;
}

export interface StepperStaticMembers {
  Step: FC<StepProps> & StepStaticMembers;
}
