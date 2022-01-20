import React from 'react';
import { Meta } from '@storybook/react';
import { CircularProgress } from './CircularProgress';
import { HStack, Text, VStack } from '@chakra-ui/react';

export default {
  component: CircularProgress,
  title: 'Components/Primitives/CircularProgress',
  argTypes: {
    size: {
      type: { name: 'string', required: false },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'number' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack>
    <HStack>
      <Text>Default</Text>
      <CircularProgress value={50} />
    </HStack>
    <HStack>
      <Text>With Label</Text>
      <CircularProgress value={50} showLabel />
    </HStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <CircularProgress {...args}></CircularProgress>;

export const Playground = Template.bind({});

Playground.args = {
  value: 50,
  showLabel: false,
};
