import React from 'react';
import { Meta } from '@storybook/react';

import { UnorderedList } from './UnorderedList';

export default {
  component: UnorderedList,
  title: 'Components/Data Display/UnorderedList',
} as Meta;

export const Default = () => (
  <UnorderedList>
    <UnorderedList.ListItem>Item 1</UnorderedList.ListItem>
    <UnorderedList.ListItem>Item 2</UnorderedList.ListItem>
    <UnorderedList.ListItem>Item 3</UnorderedList.ListItem>
  </UnorderedList>
);

