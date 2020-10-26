import React from 'react';
import { Dropdown } from '.';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Dropdown',
  component: Dropdown,
};

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <Dropdown title={text('Title', 'Title')}>
      {text('Content', 'Content')}
    </Dropdown>
  </>
);
