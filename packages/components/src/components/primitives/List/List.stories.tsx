import React from 'react';
import { List } from '.';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/List',
  component: List,
};

export const Playground = () => (
  <List tag={select('Tag', List.Tags, List.Tags.Div)}>
    <span>content</span>
  </List>
);
