import React from 'react';
import { Meta } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from './types';
import { Box, Text } from '@components';

export default {
  component: Card,
  title: 'Components/Other//Card',
} as Meta;

const Template = (args: CardProps) => (
  <Card {...args}>
    <Box>
      {Array(6)
        .fill("I'm a Card")
        .map((v, i) => (
          <Text variant="text-body-large-medium" key={i}>
            {v}
          </Text>
        ))}
    </Box>
  </Card>
);

export const WithOutlined = Template.bind({});
WithOutlined.args = { outlined: true };

export const WithFilled = Template.bind({});
WithFilled.args = { filled: true };

export const WithElevated = Template.bind({});
WithElevated.args = { elevated: true };

export const Playground = Template.bind({});
Playground.args = {
  filled: true,
  outlined: true,
  elevated: true,
};
