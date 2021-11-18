import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from './Button';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { SIZES } from '../../../theme/types';
import { ButtonVariants } from './types';

export default {
  component: Button,
  title: 'Components/Primitives/Button',
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {ButtonVariants.map((value) => (
      <VStack key={value}>
        <HStack>
          {SIZES.map((size) => (
            <Button variant={value} size={size} key={size}>
              {value}
            </Button>
          ))}
        </HStack>
        <HStack key={value}>
          {SIZES.map((size) => (
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
