import React from 'react';
import { Meta } from '@storybook/react';
import { Tag } from './Tag';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { IconAlertCircle } from '@components';
import { tagSizes } from './types';

export default {
  component: Tag,
  title: 'Components/Primitives/Tag',
  argTypes: {
    size: {
      options: tagSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    <HStack spacing={50}>
      {tagSizes.map((size) => (
        <Tag key={size} size={size}>
          <Tag.Label>Hello</Tag.Label>
        </Tag>
      ))}
    </HStack>
    <HStack spacing={50}>
      {tagSizes.map((size) => (
        <Tag key={size} size={size}>
          <Tag.LeftIcon as={IconAlertCircle} />
          <Tag.Label>Hello</Tag.Label>
        </Tag>
      ))}
    </HStack>
    <HStack spacing={50}>
      {tagSizes.map((size) => (
        <Tag key={size} size={size}>
          <Tag.Label>Hello</Tag.Label>
          <Tag.RightIcon as={IconAlertCircle} />
        </Tag>
      ))}
    </HStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = ({ showIcon, iconPosition, label, ...args }) => (
  <Tag {...args}>
    {showIcon && iconPosition === 'left' && <Tag.LeftIcon as={IconAlertCircle} />}
    <Tag.Label>{label}</Tag.Label>
    {showIcon && iconPosition === 'right' && <Tag.RightIcon as={IconAlertCircle} />}
  </Tag>
);

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  label: 'Hello',
  iconPosition: 'left',
  showIcon: true,
};
