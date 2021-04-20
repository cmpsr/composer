import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { CheckBox } from '.';

export default {
  title: 'Primitives/Form/CheckBox',
  component: CheckBox,
};

export const Disabled = () => (
  <>
    <h1>Disabled</h1>
    <CheckBox disabled checked />
    <CheckBox disabled checked={false} />
  </>
);

export const Checks = () => (
  <>
    <h1>Checks</h1>
    <CheckBox checked />
    <CheckBox checked={false} />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <CheckBox
      name={text('name', 'name')}
      onChange={action('Radio clicked')}
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
    />
  </>
);
