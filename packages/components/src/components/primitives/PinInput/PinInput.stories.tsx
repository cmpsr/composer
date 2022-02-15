import React from 'react';
import { Meta } from '@storybook/react';
import { PinInput } from './PinInput';
import { HStack, VStack, StackDivider } from '@chakra-ui/react';
import { pinInputSizes, pinInputVariants } from './types';
import { Text } from '..';

export default {
  component: PinInput,
  title: 'Components/Primitives/PinInput',
  argTypes: {
    variant: {
      options: pinInputVariants,
      control: { type: 'select' },
    },
    size: {
      options: pinInputSizes,
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
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {pinInputVariants.map((variant) => (
      <VStack key={variant} spacing={10}>
        <Text variant="text-header-M" textAlign="center">
          {variant}
        </Text>
        <HStack key={`Default-${variant}`} spacing={14}>
          {pinInputSizes.map((size) => (
            <VStack key={`Default-${variant}${size}`}>
              <Text variant="text-body-meta-regular">
                {sizeLabels[size]} - {`Default`}
              </Text>
              <PinInput
                size={size}
                defaultValue={`${size}${size}${size}${size}`}
                variant={variant}
                type="alphanumeric"
                numOfDigits={4}
              />
              <PinInput size={size} variant={variant} type="alphanumeric" numOfDigits={4} />
            </VStack>
          ))}
        </HStack>
        <HStack key={`Error-${variant}`} spacing={14}>
          {pinInputSizes.map((size) => (
            <VStack key={`Error-${variant}${size}`}>
              <Text variant="text-body-meta-regular">
                {sizeLabels[size]} - {`Error`}
              </Text>
              <PinInput
                size={size}
                defaultValue={`${size}${size}${size}${size}`}
                variant={variant}
                isInvalid
                type="alphanumeric"
                numOfDigits={4}
              />
              <PinInput size={size} variant={variant} isInvalid type="alphanumeric" numOfDigits={4} />
            </VStack>
          ))}
        </HStack>
        <HStack key={`Disabled-${variant}`} spacing={14}>
          {pinInputSizes.map((size) => (
            <VStack key={`Disabled-${variant}${size}`}>
              <Text variant="text-body-meta-regular">
                {sizeLabels[size]} - {`Disabled`}
              </Text>
              <PinInput
                size={size}
                defaultValue={`${size}${size}${size}${size}`}
                variant={variant}
                isDisabled
                type="alphanumeric"
                numOfDigits={4}
              />
              <PinInput size={size} variant={variant} isDisabled type="alphanumeric" numOfDigits={4} />
            </VStack>
          ))}
        </HStack>
      </VStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <PinInput {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'outline',
  size: 'l',
  numOfDigits: 4,
  isInvalid: false,
};
