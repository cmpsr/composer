import React from 'react';
import { StepIndicator } from '..';
import { number } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Stepper/StepIndicator',
  component: StepIndicator,
};

export const withActiveStep = () => (
  <StepIndicator
    numberOfSteps={number('numberOfSteps', 4)}
    activeStep={number('activeStep', 2)}
  />
);

withActiveStep.story = {
  name: 'With active step',
};
