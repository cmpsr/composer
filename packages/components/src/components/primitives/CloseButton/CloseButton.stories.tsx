import React from 'react';
import { Meta } from '@storybook/react';
import { CloseButton } from './CloseButton';
import { HStack, VStack } from '@chakra-ui/react';
import { closeButtonSizes } from '.';

export default {
  component: CloseButton,
  title: 'Components/Primitives/CloseButton',
  argTypes: {
    size: {
      options: closeButtonSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack>
    <HStack spacing={50}>
      {closeButtonSizes.map((size) => (
        <CloseButton key={size} size={size} />
      ))}
    </HStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <CloseButton {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
};
