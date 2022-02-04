import React from 'react';
import { Meta } from '@storybook/react';
import { PinInput, PinInputField } from './PinInput';
import { HStack, Stack, VStack, StackDivider } from '@chakra-ui/react';
import { pinInputSizes, pinInputVariants } from './types';
import { Text } from 'components';

export default {
  component: PinInput,
  title: 'Components/Primitives/PinInput',
  argTypes: {
    variant: {
      options: pinInputVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const sizeLabels = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
};

const AllTemplate = () => (
  <Stack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {pinInputVariants.map((variant) => (
      <React.Fragment key={variant}>
        <Text variant="text-header-M" textAlign="center">
          {variant}
        </Text>
        <HStack key={`Default-${variant}`}>
          {pinInputSizes.map((size) => (
            <VStack key={`Default-${variant}${size}`}>
              <Text variant="text-body-meta-regular">
                {sizeLabels[size]} - {`Default`}
              </Text>
              <HStack>
                <PinInput
                  size={size}
                  defaultValue={`${size}${size}${size}${size}`}
                  variant={variant}
                  type="alphanumeric"
                >
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                </PinInput>
              </HStack>
            </VStack>
          ))}
        </HStack>
        <HStack key={`Error-${variant}`}>
          {pinInputSizes.map((size) => (
            <VStack key={`Error-${variant}${size}`}>
              <Text variant="text-body-meta-regular">
                {sizeLabels[size]} - {`Error`}
              </Text>
              <HStack>
                <PinInput
                  size={size}
                  defaultValue={`${size}${size}${size}${size}`}
                  variant={variant}
                  isInvalid
                  type="alphanumeric"
                >
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                </PinInput>
              </HStack>
            </VStack>
          ))}
        </HStack>
        <HStack key={`Disabled-${variant}`}>
          {pinInputSizes.map((size) => (
            <VStack key={`Disabled-${variant}${size}`}>
              <Text variant="text-body-meta-regular">
                {sizeLabels[size]} - {`Disabled`}
              </Text>
              <HStack>
                <PinInput
                  size={size}
                  defaultValue={`${size}${size}${size}${size}`}
                  variant={variant}
                  isDisabled
                  type="alphanumeric"
                >
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                  <PinInputField></PinInputField>
                </PinInput>
              </HStack>
            </VStack>
          ))}
        </HStack>
      </React.Fragment>
    ))}
  </Stack>
);

export const All = AllTemplate.bind({});

const Template = (args) => (
  <PinInput {...args}>
    <PinInputField></PinInputField>
    <PinInputField></PinInputField>
    <PinInputField></PinInputField>
    <PinInputField></PinInputField>
  </PinInput>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'outline',
  size: 'm',
};
