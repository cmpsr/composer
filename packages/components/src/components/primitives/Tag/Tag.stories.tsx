import React from 'react';
import { Meta } from '@storybook/react';
import { Tag, TagLabel, TagLeftIcon, TagRightIcon } from './Tag';
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
        <TagLeftIcon as={IconAlertCircle} />
        <TagLabel>Hello</TagLabel>
      </Tag>
      <Tag size="m">
        <TagLeftIcon as={IconAlertCircle} />
        <TagLabel>Hello</TagLabel>
      </Tag>
      <Tag>
        <TagLeftIcon as={IconAlertCircle} />
        <TagLabel>Hello</TagLabel>
      </Tag>
    </HStack>
    <HStack spacing={50}>
      <Tag size="s">
        <TagLabel>Hello</TagLabel>
        <TagRightIcon as={IconAlertCircle} />
      </Tag>
      <Tag size="m">
        <TagLabel>Hello</TagLabel>
        <TagRightIcon as={IconAlertCircle} />
      </Tag>
      <Tag>
        <TagLabel>Hello</TagLabel>
        <TagRightIcon as={IconAlertCircle} />
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
