import React from 'react';
import { Toggle } from '.';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Primitives/Toggle',
  component: Toggle,
};

export const Enabled = () => <Toggle on />;

export const Disabled = () => <Toggle disabled />;

export const Playground = () => (
  <Toggle
    onStateChanged={action('on state changed')}
    on={boolean('On', false)}
    disabled={boolean('Disabled', false)}
  />
);
