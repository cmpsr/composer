import React from 'react';
import { ButtonItem } from '.';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Primitives/List/Items/ButtonItem',
  component: ButtonItem,
};

export const Playground = () => (
  <ButtonItem disabled={boolean('Disabled', false)} onClick={action('Click')}>
    {text('Content', 'Content')}
  </ButtonItem>
);
