import React from 'react';
import { Meta } from '@storybook/react';

import { NumberedList } from './NumberedList';
import { Text, TextPairing } from '@components';

export default {
  component: NumberedList,
  title: 'Components/Primitives/NumberedList',
} as Meta;

export const List = () => (
  <NumberedList>
    <NumberedList.Item>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </NumberedList.Item>
    <NumberedList.Item>
      World
      <NumberedList>
        <NumberedList.Item>
          <TextPairing>
            <TextPairing.Label>Label</TextPairing.Label>
            <TextPairing.SubLabel>SubLabel</TextPairing.SubLabel>
          </TextPairing>
        </NumberedList.Item>
        <NumberedList.Item>
          World
          <NumberedList>
            <NumberedList.Item>
              <TextPairing>
                <TextPairing.Label>Label</TextPairing.Label>
                <TextPairing.SubLabel>SubLabel</TextPairing.SubLabel>
              </TextPairing>
            </NumberedList.Item>
            <NumberedList.Item>World</NumberedList.Item>
          </NumberedList>
        </NumberedList.Item>
      </NumberedList>
    </NumberedList.Item>

    <NumberedList.Item>Three</NumberedList.Item>
    <NumberedList.Item>Four</NumberedList.Item>
  </NumberedList>
);
