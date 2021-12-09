import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from './Button';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { ButtonSizes, ButtonVariants } from './types';

export default {
  component: Button,
  title: 'Components/Primitives/Button',
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {ButtonVariants.map((value) => (
      <VStack key={value}>
        <HStack>
          {ButtonSizes.map((size) => (
            <Button variant={value} size={size} key={size}>
              {value}
            </Button>
          ))}
        </HStack>
        <HStack key={value}>
          {ButtonSizes.map((size) => (
            <Button variant={value} size={size} key={size} disabled>
              {value}
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
  children: 'Composer button!',
};
