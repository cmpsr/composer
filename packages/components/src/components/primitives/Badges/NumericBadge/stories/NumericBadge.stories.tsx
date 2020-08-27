import React from 'react';
import { NumericBadge, BadgeColor } from '..';
import { select, number } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Badges/NumericBadge',
  component: NumericBadge,
};

export const withNumber = () => <NumericBadge number={number('Number', 3)} />;

withNumber.story = {
  name: 'With number',
};

export const withMaximumNumber = () => (
  <NumericBadge
    number={number('Number', 12)}
    maximumNumber={number('Maximum number', 9)}
  />
);

withMaximumNumber.story = {
  name: 'With maximum number',
};

export const withPrimaryColor = () => (
  <NumericBadge
    color={select('color', BadgeColor, BadgeColor.Primary)}
    number={number('Number', 5)}
  />
);

withPrimaryColor.story = {
  name: 'With primary color',
};

export const withSecondaryColor = () => (
  <NumericBadge
    color={select('Color', BadgeColor, BadgeColor.Secondary)}
    number={number('Number', 5)}
  />
);

withSecondaryColor.story = {
  name: 'With secondary color',
};

export const withErrorColor = () => (
  <NumericBadge
    color={select('Color', BadgeColor, BadgeColor.Error)}
    number={number('Number', 5)}
  />
);

withErrorColor.story = {
  name: 'With error color',
};
