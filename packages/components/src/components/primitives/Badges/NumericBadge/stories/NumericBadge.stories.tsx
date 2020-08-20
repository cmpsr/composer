import React from 'react';
import { NumericBadge, BadgeColor } from '..';
import { select, number } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Badges/NumericBadge',
  component: NumericBadge,
};

export const basic = () => (
  <NumericBadge
    number={number('number', 3)}
    maximumNumber={number('maxiNumber', 9)}
    color={select('color', BadgeColor, BadgeColor.Primary)}
  />
);

basic.story = {
  name: 'Basic',
};
