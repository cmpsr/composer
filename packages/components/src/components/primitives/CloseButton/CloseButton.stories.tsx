import React from 'react';
import { Meta } from '@storybook/react';
import { CloseButton } from './CloseButton';
import { HStack, Text, VStack } from '@chakra-ui/react';

export default {
  component: CloseButton,
  title: 'Components/Primitives/CloseButton',
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
    <HStack spacing={50}>
      <CloseButton />
      <CloseButton size="m" />
      <CloseButton size="s" />
    </HStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <CloseButton {...args}></CloseButton>;

export const Playground = Template.bind({});

Playground.args = {
  value: 50,
  showLabel: false,
};
