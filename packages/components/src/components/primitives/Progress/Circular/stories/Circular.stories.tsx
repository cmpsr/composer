import React from 'react';
import { Circular, CircularColor, CircularSize } from '..';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Progress/Circular',
  component: Circular,
};

export const withPrimaryColor = () => (
  <Circular color={select('Color', CircularColor, CircularColor.Primary)} />
);

withPrimaryColor.story = {
  name: 'With primary color',
};

export const withLargeSize = () => <Circular size={select('Size', CircularSize, CircularSize.Large)} />;

withLargeSize.story = {
  name: 'With large size',
};

export const withSmallSize = () => <Circular size={select('Size', CircularSize, CircularSize.Small)} />;

withSmallSize.story = {
  name: 'With small size',
};
