import React from 'react';
import { Meta } from '@storybook/react';
import { Text, TextPairing } from '@components';

import { NumberedList } from './NumberedList';

export default {
  component: NumberedList,
  title: 'Components/Data Display/NumberedList',
} as Meta;

export const Simple = () => (
  <NumberedList>
    <NumberedList.Item>
      <Text>Item</Text>
    </NumberedList.Item>
    <NumberedList.Item>
      <TextPairing>
        <TextPairing.Label>Item</TextPairing.Label>
        <TextPairing.SubLabel>Description</TextPairing.SubLabel>
      </TextPairing>
    </NumberedList.Item>
    <NumberedList.Item>
      <Text>Item</Text>
    </NumberedList.Item>
    <NumberedList.Item>
      <Text>Item</Text>
    </NumberedList.Item>
  </NumberedList>
);

export const Nested = () => (
  <NumberedList>
    <NumberedList.Item>
      <Text>Item</Text>
    </NumberedList.Item>
    <NumberedList.Item>
      <Text>Item</Text>
      <NumberedList>
        <NumberedList.Item>
          <TextPairing>
            <TextPairing.Label>Item</TextPairing.Label>
            <TextPairing.SubLabel>Description</TextPairing.SubLabel>
          </TextPairing>
          <NumberedList>
            <NumberedList.Item>
              <Text>Item</Text>
            </NumberedList.Item>
            <NumberedList.Item>
              <Text>Item</Text>
            </NumberedList.Item>
            <NumberedList.Item>
              <Text>Item</Text>
            </NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>
        <NumberedList.Item>
          <Text>Item</Text>
        </NumberedList.Item>
      </NumberedList>
    </NumberedList.Item>
    <NumberedList.Item>
      <Text>Item</Text>
    </NumberedList.Item>
  </NumberedList>
);
