import React from 'react';
import { Meta } from '@storybook/react';
import { Divider } from './Divider';
import { DividerOrientations } from './types';
import { Center, VStack, StackDivider } from '@chakra-ui/react';

export default {
  component: Divider,
  title: 'Components/Primitives/Divider',
  argTypes: {
    orientation: {
      options: DividerOrientations,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {DividerOrientations.map((orientation, id) => (
      <Template orientation={orientation} key={id} />
    ))}
  </VStack>
);
export const All = AllTemplate.bind({});

const Template = (args) => (
  <Center height="50px" width="full">
    <Divider {...args} />
  </Center>
);
export const Playground = Template.bind({});

Playground.args = {
  orientation: 'horizontal',
};
