import React from 'react';
import { Meta } from '@storybook/react';
import { Textarea } from './Textarea';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
// import { textareaVariants } from './types';
// import { ButtonSizes, buttonVariants } from './types';

export default {
  component: Textarea,
  title: 'Components/Primitives/Textarea',
  argTypes: {
    variant: {
      // options: textareaVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    <VStack>
      <HStack>
        <Textarea placeholder="label" />
        <Textarea placeholder="label" defaultValue="label" />
      </HStack>
    </VStack>
    <VStack>
      <HStack>
        <Textarea isInvalid />
      </HStack>
    </VStack>
    <VStack>
      <HStack>
        <Textarea isDisabled placeholder="hello" />
        <Textarea isDisabled defaultValue="label" />
      </HStack>
    </VStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Textarea {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  children: 'Composer button!',
};
