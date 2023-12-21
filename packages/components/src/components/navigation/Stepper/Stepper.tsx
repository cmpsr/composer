import React, { FC } from 'react';
import {
  Stepper as ChakraStepper,
  Step as ChakraStep,
  StepProps,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
} from '@chakra-ui/react';
import { StepStaticMembers, StepperProps, StepperStaticMembers } from './types';
import { Text, TextProps } from '../../typography';

export { useSteps } from '@chakra-ui/react';

export const Stepper: FC<StepperProps> & StepperStaticMembers = (props) => <ChakraStepper {...props} />;

const Step: FC<StepProps> & StepStaticMembers = (props) => <ChakraStep {...props} />;

const Title = (props: TextProps) => {
  const defaultStyles: Partial<TextProps> = {
    variant: 'text-body-floating-label-bold',
    marginBottom: 'spacer-1',
    color: 'text-primary',
  };

  return <Text {...defaultStyles} {...props} />;
};

const Description = (props: TextProps) => {
  const defaultStyles: Partial<TextProps> = {
    variant: 'text-body-floating-label-regular',
    color: 'text-secondary',
  };

  return <Text {...defaultStyles} {...props} />;
};

Step.Icon = StepIcon;
Step.Indicator = StepIndicator;
Step.Number = StepNumber;
Step.Separator = StepSeparator;
Step.Status = StepStatus;
Step.Title = Title;
Step.Description = Description;

Stepper.Step = Step;
