import React from 'react';
import { Meta } from '@storybook/react';
import { HStack, StackDivider, VStack } from '@chakra-ui/react';
import { Input } from '.';
import { inputSizes, inputVariants } from './types';
import { IconCloud } from '../Icons';

export default {
  component: Input,
  title: 'Components/Primitives/Input',
  argTypes: {
    variant: {
      options: inputVariants,
      control: { type: 'select' },
    },
    size: {
      options: inputSizes,
      control: { type: 'select' },
    },
    showTrailingIcon: {
      control: { type: 'boolean' },
    },
    leftLabel: {
      type: { name: 'string', required: false },
    },
    rightLabel: {
      type: { name: 'string', required: false },
    },
    placeholder: {
      type: { name: 'string', required: false },
    },
  },
} as Meta;

const AllTemplate = () => {
  const [values, setValues] = React.useState({});

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {inputVariants.map((variant) => (
        <HStack key={variant}>
          {inputSizes.map((size) => (
            <Input
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              value={values[`${variant}-${size}`]}
              onChange={(evt) =>
                setValues({
                  ...values,
                  [`${variant}-${size}`]: evt.target.value,
                })
              }
            />
          ))}
        </HStack>
      ))}
    </VStack>
  );
};

export const All = AllTemplate.bind({});

const Template = (args) => (
  <Input trailingIcon={<IconCloud boxSize={'1rem'} />} {...args} />
);
export const Playground = Template.bind({});
Playground.args = {
  variant: 'outline',
  size: 'l',
  showTrailingIcon: false,
  placeholder: 'A placeholder',
  leftLabel: '',
  rightLabel: '',
};
