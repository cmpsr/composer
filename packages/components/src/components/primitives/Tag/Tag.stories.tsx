import React from 'react';
import { Meta } from '@storybook/react';
import { Tag } from './Tag';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { IconAlertCircle } from '../Icons';
import { TagSizes } from './types';

export default {
  component: Tag,
  title: 'Components/Primitives/Tag',
  argTypes: {
    size: {
      options: TagSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    <HStack spacing={50}>
      <Tag size="s">Hello</Tag>
      <Tag size="m">Hello</Tag>
      <Tag>Hello</Tag>
    </HStack>
    <HStack spacing={50}>
      <Tag size="s">
        <Tag.LeftIcon as={IconAlertCircle} />
        <Tag.Label>Hello</Tag.Label>
      </Tag>
      <Tag size="m">
        <Tag.LeftIcon as={IconAlertCircle} />
        <Tag.Label>Hello</Tag.Label>
      </Tag>
      <Tag>
        <Tag.LeftIcon as={IconAlertCircle} />
        <Tag.Label>Hello</Tag.Label>
      </Tag>
    </HStack>
    <HStack spacing={50}>
      <Tag size="s">
        <Tag.Label>Hello</Tag.Label>
        <Tag.RightIcon as={IconAlertCircle} />
      </Tag>
      <Tag size="m">
        <Tag.Label>Hello</Tag.Label>
        <Tag.RightIcon as={IconAlertCircle} />
      </Tag>
      <Tag>
        <Tag.Label>Hello</Tag.Label>
        <Tag.RightIcon as={IconAlertCircle} />
      </Tag>
    </HStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Tag {...args}>hello</Tag>;
export const Playground = Template.bind({});
Playground.args = {
  size: 's',
};
