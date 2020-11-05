import React from 'react';
import { Pill } from '.';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Pill',
  component: Pill,
};

export const Playground = () => <Pill label={text('Label', 'Content')} />;
