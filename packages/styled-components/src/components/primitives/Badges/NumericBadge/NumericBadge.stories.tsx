import React from 'react';
import { NumericBadge } from '.';
import { number, select, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Primitives/Badges/NumericBadge',
  component: NumericBadge,
};

export const Number = () => <NumericBadge number={3} />;

export const MaximumReached = () => (
  <NumericBadge number={12} maximumNumber={9} />
);

export const PrimaryColor = () => (
  <NumericBadge color={NumericBadge.Color.Primary} number={5} />
);

export const SecondaryColor = () => (
  <NumericBadge color={NumericBadge.Color.Secondary} number={5} />
);

export const ErrorColor = () => (
  <NumericBadge color={NumericBadge.Color.Error} number={5} />
);

export const Playground = () => (
  <NumericBadge
    color={select('Color', NumericBadge.Color, NumericBadge.Color.Primary)}
    number={number('Number', 5)}
    maximumNumber={number('Maximum number allowed', 9)}
  />
);
