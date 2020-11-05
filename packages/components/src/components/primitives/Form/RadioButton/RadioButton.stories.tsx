import React from 'react';
import { RadioButton } from '.';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Primitives/Form/RadioButton',
  component: RadioButton,
};

export const Disabled = () => (
  <>
    <h1>Disabled</h1>
    <RadioButton disabled checked />
    <RadioButton disabled checked={false} />
  </>
);

export const Checks = () => (
  <>
    <h1>Checks</h1>
    <RadioButton checked />
    <RadioButton checked={false} />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <RadioButton
      name={text('name', 'name')}
      value={text('value', 'default')}
      label={text('label', 'Option')}
      onChange={action('Radio clicked')}
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
    />
  </>
);
