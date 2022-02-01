import React from 'react';
import { Meta } from '@storybook/react';
import { IconButton } from './IconButton';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { iconButtonSizes, iconButtonVariants } from './types';
import { IconCloud } from '..';

export default {
  component: IconButton,
  title: 'Components/Primitives/IconButton',
  argTypes: {
    size: {
      options: iconButtonSizes,
      control: { type: 'select' },
    },
    variant: {
      options: iconButtonVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {iconButtonVariants.map((variant) => (
      <VStack key={variant}>
        <HStack>
          {iconButtonSizes.map((size) => (
            <IconButton icon={<IconCloud />} aria-label={size} variant={variant} size={size} key={size} />
          ))}
        </HStack>
        <HStack key={variant}>
          {iconButtonSizes.map((size) => (
            <IconButton icon={<IconCloud />} aria-label={size} variant={variant} size={size} key={size} isDisabled />
          ))}
        </HStack>
        <HStack key={variant}>
          {iconButtonSizes.map((size) => (
            <IconButton icon={<IconCloud />} aria-label={size} variant={variant} size={size} key={size} rounded />
          ))}
        </HStack>
      </VStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <IconButton icon={<IconCloud />} {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'l',
  isDisabled: false,
  isLoading: false,
};
