import React from 'react';
import { Meta } from '@storybook/react';
import { Flex } from './Flex';
import { Box, Text } from '@components';

export default {
  component: Flex,
  title: 'Components/Layouts/Flex',
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: { type: 'select' },
    },
    wrap: {
      options: ['wrap', 'wrap-reverse', 'nowrap'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = ({ children, ...rest }) => (
  <Flex {...rest}>
    {[1, 2, 3, 4, 5].map((index) => (
      <Box key={index} margin="spacer-1" padding="spacer-4" border="1px solid var(--chakra-colors-accent-default)">
        <Text variant="text-body-bold">
          {children}:{` ${index}`}
        </Text>
      </Box>
    ))}
  </Flex>
);
export const Playground = Template.bind({});
Playground.args = {
  children: "I'm a Flex container with some child",
  direction: 'row',
  border: '1px solid var(--chakra-colors-primary-default)',
  wrap: 'wrap',
  padding: 'spacer-2',
};
