import React from 'react';
import { Meta } from '@storybook/react';
import { Input } from './Input';
import { Stack, HStack } from '@chakra-ui/layout';
import { SIZES } from '../../../theme/types';
import { inputVariants } from './types';

export default {
  component: Input,
  title: 'Components/Primitives/Input',
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const AllTemplate = (props) => (
  <Stack>
    {inputVariants.map((variant) => (
      <HStack key={variant}>
        {SIZES.map((size) => (
          <Input
            placeholder={size}
            defaultValue={size}
            size={size}
            key={`${size}_${variant}`}
            variant={variant}
            isInvalid={props.invalid}
          ></Input>
        ))}
      </HStack>
    ))}
  </Stack>
);

export const All = AllTemplate.bind({});
