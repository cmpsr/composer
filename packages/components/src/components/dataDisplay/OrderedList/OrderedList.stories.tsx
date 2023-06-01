import React from 'react';
import { Meta } from '@storybook/react';

import { OrderedList } from './OrderedList';

export default {
  component: OrderedList,
  title: 'Components/Data Display/OrderedList',
} as Meta;

export const Default = () => (
  <OrderedList>
    <OrderedList.Item>Item 1</OrderedList.Item>
    <OrderedList.Item>Item 2</OrderedList.Item>
    <OrderedList.Item>Item 3</OrderedList.Item>
  </OrderedList>
);
