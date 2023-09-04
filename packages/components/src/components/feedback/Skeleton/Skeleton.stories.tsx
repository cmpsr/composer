import React from 'react';
import { Meta } from '@storybook/react';
import { Skeleton, SkeletonCircle, SkeletonProps, SkeletonText } from './index';
import { Flex } from '@components/layouts';

export default {
  title: 'Components/Feedback/Skeleton',
} as Meta;

const commonArgs = {
  children: 'content',
  isLoaded: false,
};

const SkeletonTemplate = (args: SkeletonProps) => <Skeleton {...args} />;
export const SkeletonPlayground = SkeletonTemplate.bind({});

SkeletonPlayground.args = {
  ...commonArgs,
  height: '6rem',
};

const SkeletonCircleTemplate = (args: SkeletonProps) => <SkeletonCircle {...args} />;
export const SkeletonCirclePlayground = SkeletonCircleTemplate.bind({});

SkeletonCirclePlayground.args = {
  ...commonArgs,
  size: '20',
};

const SkeletonTextTemplate = (args: SkeletonProps) => <SkeletonText {...args} />;
export const SkeletonTextPlayground = SkeletonTextTemplate.bind({});

SkeletonTextPlayground.args = {
  ...commonArgs,
  noOfLines: 3,
  skeletonHeight: '2',
  spacing: 4,
};

const AllTemplate = () => (
  <Flex flexDirection="column" gap="4rem">
    <Skeleton height="6rem" />
    <SkeletonCircle size="10" />
    <SkeletonText noOfLines={3} spacing="3" />
  </Flex>
);

export const All = AllTemplate.bind({});
