import React from 'react';
import { Circular, CircularColor, CircularSize } from '..';

export default {
  title: 'Composer/Primitive/Progress/Circular',
  component: Circular,
};

export const withPrimaryColor = () => (
  <Circular color={CircularColor.Primary} />
);

withPrimaryColor.story = {
  name: 'With primary color',
};

export const withLargeSize = () => <Circular size={CircularSize.Large} />;

withLargeSize.story = {
  name: 'With large size',
};

export const withSmallSize = () => <Circular size={CircularSize.Small} />;

withSmallSize.story = {
  name: 'With small size',
};
