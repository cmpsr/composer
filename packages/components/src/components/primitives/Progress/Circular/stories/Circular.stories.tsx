import React from 'react';
import { Circular, CircularColor, CircularSize } from '..';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Progress/Circular',
  component: Circular,
};

export const basic = () => (
  <Circular
    color={select('Color', CircularColor, CircularColor.Primary)}
    size={select('Size', CircularSize, CircularSize.Large)}
  />
);

basic.story = {
  name: 'Basic',
};
