import { FC } from 'react';
import {
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepProps,
  StepSeparator,
  StepStatus,
  StepTitle,
  StepperProps as ChakraStepperProps,
} from '@chakra-ui/react';

export interface StepperProps extends Omit<ChakraStepperProps, 'size' | 'variant'> {}

export interface StepStaticMembers {
  Icon: typeof StepIcon;
  Indicator: typeof StepIndicator;
  Number: typeof StepNumber;
  Separator: typeof StepSeparator;
  Status: typeof StepStatus;
  Title: typeof StepTitle;
  Description: typeof StepDescription;
}

export interface StepperStaticMembers {
  Step: FC<StepProps> & StepStaticMembers;
}
