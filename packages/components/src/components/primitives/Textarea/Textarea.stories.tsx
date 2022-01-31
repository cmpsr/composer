import React from 'react';
import { Meta } from '@storybook/react';
import { Textarea } from './Textarea';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { textareaSizes } from './types';

export default {
  component: Textarea,
  title: 'Components/Primitives/Textarea',
  argTypes: {
    size: {
      options: textareaSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const placeholder = 'Text input area...';
const defaultValue = 'Filled text input area...';

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    <VStack>
      <HStack>
        <Textarea placeholder={placeholder} />
        <Textarea placeholder={placeholder} size="m" />
      </HStack>
    </VStack>
    <VStack>
      <HStack>
        <Textarea defaultValue={defaultValue} />
        <Textarea defaultValue={defaultValue} size="m" />
      </HStack>
    </VStack>
    <VStack>
      <HStack>
        <Textarea placeholder={placeholder} isInvalid />
        <Textarea placeholder={placeholder} size="m" isInvalid />
      </HStack>
    </VStack>
    <VStack>
      <HStack>
        <Textarea defaultValue={defaultValue} isInvalid />
        <Textarea defaultValue={defaultValue} size="m" isInvalid />
      </HStack>
    </VStack>
    <VStack>
      <HStack>
        <Textarea placeholder={placeholder} isDisabled />
        <Textarea placeholder={placeholder} size="m" isDisabled />
      </HStack>
    </VStack>
    <VStack>
      <HStack>
        <Textarea defaultValue={defaultValue} isDisabled />
        <Textarea defaultValue={defaultValue} size="m" isDisabled />
      </HStack>
    </VStack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Textarea {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  size: 's',
  isInvalid: false,
  isDisabled: false,
  placeholder: '',
};
