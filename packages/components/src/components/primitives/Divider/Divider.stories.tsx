import React from 'react';
import { Meta } from '@storybook/react';
import { Divider } from './Divider';
import { Text } from '../Text';
import { DividerOrientations } from './types';
import { VStack } from '@chakra-ui/react';

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
  <VStack spacing={4}>
    {DividerOrientations.map((orientation, id) => (
      <>
        <Text variant="text-header-L">{orientation}</Text>
        <Template orientation={orientation} key={id} />
      </>
    ))}
  </VStack>
);
export const All = AllTemplate.bind({});

const Template = (args) => <Divider {...args} height="50px" />;
export const Playground = Template.bind({});

Playground.args = {
  orientation: 'horizontal',
};
