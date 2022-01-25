import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from './Button';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { ButtonSizes, buttonVariants } from './types';

export default {
  component: Button,
  title: 'Components/Primitives/Button',
  argTypes: {
    variant: {
      options: buttonVariants,
      control: { type: 'select' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {buttonVariants.map((variant) => (
      <VStack key={variant}>
        <HStack>
          {ButtonSizes.map((size) => (
            <Button variant={variant} size={size} key={size}>
              {variant}
            </Button>
          ))}
        </HStack>
        <HStack key={variant}>
          {ButtonSizes.map((size) => (
            <Button variant={variant} size={size} key={size} isDisabled>
              {variant}
            </Button>
          ))}
        </HStack>
        <HStack key={variant}>
          {ButtonSizes.map((size) => (
            <Button variant={variant} size={size} key={size} isLoading>
              {variant}
            </Button>
          ))}
        </HStack>
      </VStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Button {...args}></Button>;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  children: 'Composer button!',
  isLoading: false,
};
