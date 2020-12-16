import React from 'react';
import { Toggle } from '.';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Primitives/Toggle',
  component: Toggle,
};

export const Playground = () => (
  <Toggle
    onStateChanged={action('on state changed')}
    enabled={boolean('Enabled', false)}
    disabled={boolean('Disabled', false)}
  />
);
