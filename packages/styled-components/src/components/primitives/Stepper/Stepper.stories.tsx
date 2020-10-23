import React from 'react';
import { Stepper } from '.';
import { number } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Stepper',
  component: Stepper,
};

export const Playground = () => (
  <Stepper
    numberOfSteps={number('Number of steps', 4)}
    activeStep={number('Active step', 2)}
  />
);
