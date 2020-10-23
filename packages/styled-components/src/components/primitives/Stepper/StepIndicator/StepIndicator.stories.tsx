import React from 'react';
import { StepIndicator } from '.';
import { number } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Stepper/StepIndicator',
  component: StepIndicator,
};

export const Playground = () => (
  <StepIndicator
    numberOfSteps={number('Number of steps', 4)}
    activeStep={number('Active step', 2)}
  />
);
