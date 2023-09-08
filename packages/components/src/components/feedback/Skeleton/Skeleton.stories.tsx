import React from 'react';
import { Meta } from '@storybook/react';
import { Skeleton, SkeletonProps, skeletonVariants } from './index';
import { Flex } from '@components/layouts';

export default {
  title: 'Components/Feedback/Skeleton',
  argTypes: {
    variant: {
      options: skeletonVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <Flex flexDirection="column" gap="4rem">
    <Skeleton height="6rem" />
    <Skeleton variant="circle" size="10" />
    <Skeleton variant="text" noOfLines={3} spacing="3" />
  </Flex>
);

export const All = AllTemplate.bind({});

const Template = (args: SkeletonProps) => <Skeleton {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  variant: 'default',
  children: 'content',
  isLoaded: false,
};
