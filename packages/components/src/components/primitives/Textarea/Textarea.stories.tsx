import React from 'react';
import { Meta } from '@storybook/react';
import { Textarea } from './Textarea';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { textareaSizes, textareaVariants } from './types';

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
  <VStack divider={<StackDivider borderColor="gray.200" />}>
    {textareaVariants.map((variant) => (
      <VStack key={variant} spacing={4}>
        <VStack>
          <HStack>
            {textareaSizes.map((size) => (
              <Textarea key={size} placeholder={placeholder} size={size} variant={variant} />
            ))}
          </HStack>
        </VStack>
        <VStack>
          <HStack>
            {textareaSizes.map((size) => (
              <Textarea key={size} placeholder={placeholder} size={size} isInvalid variant={variant} />
            ))}
          </HStack>
        </VStack>
        <VStack>
          <HStack>
            {textareaSizes.map((size) => (
              <Textarea key={size} placeholder={placeholder} size={size} isDisabled variant={variant} />
            ))}
          </HStack>
          <HStack>
            {textareaSizes.map((size) => (
              <Textarea
                key={size}
                placeholder={placeholder}
                size={size}
                isDisabled
                variant={variant}
                defaultValue={defaultValue}
              />
            ))}
          </HStack>
        </VStack>
      </VStack>
    ))}
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
