import React from 'react';
import { Meta } from '@storybook/react';

import { UnorderedList } from './UnorderedList';

export default {
  component: UnorderedList,
  title: 'Components/Data Display/UnorderedList',
} as Meta;

export const Default = () => (
  <UnorderedList>
    <UnorderedList.Item>Item 1</UnorderedList.Item>
    <UnorderedList.Item>Item 2</UnorderedList.Item>
    <UnorderedList.Item>Item 3</UnorderedList.Item>
  </UnorderedList>
);
