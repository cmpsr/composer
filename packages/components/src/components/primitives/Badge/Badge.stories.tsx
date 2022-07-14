import React from 'react';
import { Meta } from '@storybook/react';
import { Badge } from './Badge';
import { StackDivider, VStack } from '@chakra-ui/layout';
import { badgeVariants } from './types';
import { getFigmaDesignLink } from '@components/figmaLinks';

export default {
  component: Badge,
  title: 'Components/Primitives/Badge',
  argTypes: {
    variant: {
      options: badgeVariants,
      control: { type: 'select' },
    },
  },
  parameters: getFigmaDesignLink('badge'),
} as Meta;

export const All = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {badgeVariants.map((variant) => (
      <Badge variant={variant} key={variant}>
        {variant}
      </Badge>
    ))}
  </VStack>
);

const Template = (args) => <Badge {...args}></Badge>;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'solid',
  children: 'Composer badge!',
};
