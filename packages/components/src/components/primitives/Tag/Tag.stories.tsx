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
      {TagSizes.map((size) => (
        <Tag size={size} label="Hello" />
      ))}
    </HStack>
    <HStack spacing={50}>
      {TagSizes.map((size) => (
        <Tag
          size={size}
          label="Hello"
          icon={IconAlertCircle}
          iconPosition="left"
        />
      ))}
    </HStack>
    <HStack spacing={50}>
      {TagSizes.map((size) => (
        <Tag
          size={size}
          label="Hello"
          icon={IconAlertCircle}
          iconPosition="right"
        />
      ))}
    </HStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => (
  <Tag {...args} icon={args.showIcon ? IconAlertCircle : undefined} />
);
export const Playground = Template.bind({});
Playground.args = {
  size: 'l',
  label: 'Hello',
  iconPosition: 'left',
  showIcon: true,
};
