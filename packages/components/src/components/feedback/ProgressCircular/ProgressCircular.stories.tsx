import React from 'react';
import { Meta } from '@storybook/react';
import { ProgressCircular } from './ProgressCircular';
import { HStack, Text, VStack } from '@chakra-ui/react';

export default {
  component: ProgressCircular,
  title: 'Components/Feedback/ProgressCircular',
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
      <ProgressCircular value={50} />
    </HStack>
    <HStack>
      <Text>With Label</Text>
      <ProgressCircular value={50} showLabel />
    </HStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <ProgressCircular {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  value: 50,
  showLabel: false,
};
