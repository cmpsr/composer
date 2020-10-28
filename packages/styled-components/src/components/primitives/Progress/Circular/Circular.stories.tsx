import React from 'react';
import { Circular  } from '.';
import { Color, CircularSize } from './Circular.types';

export default {
  title: 'Primitives/Progress/Circular',
  component: Circular,
};

export const withPrimaryColor = () => (
  <Circular color={Color.Primary} />
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
