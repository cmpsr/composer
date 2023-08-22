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
  StepTitle,
  StepDescription,
} from '@chakra-ui/react';
import { StepStaticMembers, StepperProps, StepperStaticMembers } from './types';

export { useSteps } from '@chakra-ui/react';

export const Stepper: FC<StepperProps> & StepperStaticMembers = (props) => <ChakraStepper {...props} />;

const Step: FC<StepProps> & StepStaticMembers = (props) => <ChakraStep {...props} />;

Step.Icon = StepIcon;
Step.Indicator = StepIndicator;
Step.Number = StepNumber;
Step.Separator = StepSeparator;
Step.Status = StepStatus;
Step.Title = StepTitle;
Step.Description = StepDescription;

Stepper.Step = Step;
