import React from 'react';
import { Meta } from '@storybook/react';
import { ProgressCircular } from './ProgressCircular';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { getFigmaDesignLink } from '@theme/figmaLinks';

export default {
  component: ProgressCircular,
  title: 'Components/Primitives/ProgressCircular',
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
  parameters: getFigmaDesignLink('progressCircular'),
} as Meta;

export const All = () => (
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

const Template = (args) => <ProgressCircular {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  value: 50,
  showLabel: false,
};
