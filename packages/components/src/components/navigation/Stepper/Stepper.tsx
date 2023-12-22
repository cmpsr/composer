import React, { FC } from 'react';
import {
  Stepper as ChakraStepper,
  Step as ChakraStep,
  StepProps,
  StepIndicator,
  StepNumber as ChakraStepNumber,
  StepSeparator,
  StepStatus,
} from '@chakra-ui/react';
import { StepStaticMembers, StepperProps, StepperStaticMembers } from './types';
import { Text, TextProps } from '../../typography';
import { IconCheck, IconProps } from '../../media';

export { useSteps } from '@chakra-ui/react';

export const Stepper: FC<StepperProps> & StepperStaticMembers = (props) => <ChakraStepper {...props} />;

const Step: FC<StepProps> & StepStaticMembers = (props) => <ChakraStep {...props} />;

const StepIcon: FC<IconProps> = (props) => <IconCheck size="s" {...props} />;

const StepNumber: FC<TextProps> = (props) => <Text as={ChakraStepNumber} variant="text-body-meta-medium" {...props} />;

Step.Icon = StepIcon;
Step.Indicator = StepIndicator;
Step.Number = StepNumber;
Step.Separator = StepSeparator;
Step.Status = StepStatus;
Step.Title = Text;
Step.Description = Text;

Stepper.Step = Step;
