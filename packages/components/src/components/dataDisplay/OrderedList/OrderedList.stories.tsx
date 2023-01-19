import React from 'react';
import { Meta } from '@storybook/react';

import { OrderedList } from './OrderedList';

export default {
  component: OrderedList,
  title: 'Components/Data Display/OrderedList',
} as Meta;

export const Default = () => (
  <OrderedList>
    <OrderedList.ListItem>Item 1</OrderedList.ListItem>
    <OrderedList.ListItem>Item 2</OrderedList.ListItem>
    <OrderedList.ListItem>Item 3</OrderedList.ListItem>
  </OrderedList>
);

