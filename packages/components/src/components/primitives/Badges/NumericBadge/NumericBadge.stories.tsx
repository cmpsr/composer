import React from 'react';
import { NumericBadge } from '.';
import { number, select, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

export default {
  title: 'Primitives/Badges/NumericBadge',
  component: NumericBadge,
};

export const Number = () => (
  <NumericBadge number={3} color={NumericBadge.Color.Primary} />
);

export const MaximumReached = () => (
  <NumericBadge
    number={12}
    maximumNumber={9}
    color={NumericBadge.Color.Primary}
  />
);

export const Colors = () => (
  <>
    <h1>NumericBadge colors</h1>
    {Object.keys(NumericBadge.Color).map((color: any) => (
      <>
        <NumericBadge color={NumericBadge.Color[color]} number={5} />
        <br />
      </>
    ))}
  </>
);

export const Playground = () => (
  <ThemeProvider
    theme={{
      ...theme,
      NumericBadge: {
        height: text('Height', '1.25rem'),
        width: text('Width', '1.25rem'),
        padding: text('Padding', '0.15rem'),
      },
    }}
  >
    <NumericBadge
      color={select('Color', NumericBadge.Color, NumericBadge.Color.Primary)}
      number={number('Number', 5)}
      maximumNumber={number('Maximum number allowed', 9)}
    />
  </ThemeProvider>
);
