import React from 'react';
import { Meta } from '@storybook/react';
import { VStack } from '@chakra-ui/react';
import { Divider } from '.';
import { Flex, Text } from '@components';

const dividerOrientations = ['horizontal', 'vertical'];

export default {
  component: Divider,
  title: 'Components/Primitives/Divider',
  argTypes: {
    orientation: {
      options: dividerOrientations,
      control: { type: 'select' },
    },
  },
} as Meta;

export const AllTemplate = () => (
  <VStack spacing={4}>
    {dividerOrientations.map((orientation) => (
      <Flex key={orientation} width="full" flexDirection="column" alignItems="center">
        <Text variant="text-header-L">{orientation}</Text>
        <Template orientation={orientation} />
      </Flex>
    ))}
  </VStack>
);

const Template = (args) => <Divider {...args} height="50px" />;
export const Playground = Template.bind({});

Playground.args = {
  orientation: 'horizontal',
};
