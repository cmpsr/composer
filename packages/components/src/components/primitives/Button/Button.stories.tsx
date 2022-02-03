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
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {buttonVariants.map((variant, i) => (
      <VStack key={`${variant}-${i}`}>
        <HStack>
          {ButtonSizes.map((size, i) => (
            <Button variant={variant} size={size} key={`${size}-${i}`}>
              {variant}
            </Button>
          ))}
        </HStack>
        <HStack>
          {ButtonSizes.map((size, i) => (
            <Button variant={variant} size={size} key={`${size}-${i}-disabled`} isDisabled>
              {variant}
            </Button>
          ))}
        </HStack>
        <HStack>
          {ButtonSizes.map((size, i) => (
            <Button variant={variant} size={size} key={`${size}-${i}-loading`} isLoading>
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
  size: 'm',
  children: 'Composer button!',
  isLoading: false,
};
