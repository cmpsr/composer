import React from 'react';
import { CurrencyField } from '.';
import { boolean, text, select, number } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Form/CurrencyField',
  component: CurrencyField,
};

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <CurrencyField
      placeholder={text('Placeholder', 'Placeholder')}
      name={text('Name', 'default')}
      shape={select('Shape', CurrencyField.Shapes, CurrencyField.Shapes.Rectangle)}
      disabled={boolean('Disabled', false)}
      invalid={boolean('Invalid', false)}
      required={boolean('Required', false)}
    />
  </>
);