import React from 'react';
import { Meta } from '@storybook/react';
import { Badge } from './Badge';
import { StackDivider, VStack } from '@chakra-ui/layout';
import { badgeVariants } from './types';

export default {
  component: Badge,
  title: 'Components/Primitives/Badge',
  argTypes: {
    variant: {
      options: badgeVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {badgeVariants.map((variant) => (
      <Badge variant={variant} key={variant}>
        {variant}
      </Badge>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Badge {...args}></Badge>;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'solid',
  children: 'Composer badge!',
};
