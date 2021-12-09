import React from 'react';
import { Meta } from '@storybook/react';
import { Spinner } from './Spinner';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { spinnerSizes, spinnerVariants } from './types';

export default {
  component: Spinner,
  title: 'Components/Primitives/Spinner',
  argTypes: {
    variant: {
      options: spinnerVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {spinnerVariants.map((variant) => (
      <VStack key={variant}>
        <HStack>
          {spinnerSizes.map((size) => (
            <Spinner variant={variant} size={size} key={size} />
          ))}
        </HStack>
        <HStack key={variant}>
          {spinnerSizes.map((size) => (
            <Spinner variant={variant} size={size} key={size} />
          ))}
        </HStack>
      </VStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Spinner {...args}></Spinner>;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'accent',
  size: 'xs',
};
