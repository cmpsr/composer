import React from 'react';
import { Pill } from '..';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Pill',
  component: Pill,
};

export const basic = () => <Pill label={text('Label', "TODAY")} />;

basic.story = {
  name: 'Basic',
};
