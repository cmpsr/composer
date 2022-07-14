import React from 'react';
import { Meta } from '@storybook/react';
import { VStack } from '@chakra-ui/react';
import { Divider } from '.';
import { Flex, Text } from '@components';
import { getFigmaDesignLink } from '@components/figmaLinks';

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
  parameters: getFigmaDesignLink('divider'),
} as Meta;

export const All = () => (
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
