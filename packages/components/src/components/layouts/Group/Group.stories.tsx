import React from 'react';
import { Group } from '.';

export default {
  title: 'Composer/Layout/Group',
  component: Group,
};

export const with2ColumnsDesktop1Mobile = () => (
  <Group>
    <p>Item 1</p>
    <p>Item 2</p>
  </Group>
);

with2ColumnsDesktop1Mobile.story = {
  name: 'With 2 items',
};
