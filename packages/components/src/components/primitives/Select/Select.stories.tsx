import React from 'react';
import { Meta } from '@storybook/react';
import { Select } from '.';
import { selectSizes } from './types';
import { StackDivider, VStack } from '@chakra-ui/react';

export default {
  component: Select,
  title: 'Components/Primitives/Select',
  argTypes: {
    size: {
      options: selectSizes,
      control: { type: 'select' },
    },
    filled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {selectSizes.map((size) => (
      <VStack key={size}>
        <Select size={size}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select size={size} error>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </VStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => (
  <Select {...args}>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
);
export const Playground = Template.bind({});
Playground.args = {
  size: 'lg',
  filled: false,
};
