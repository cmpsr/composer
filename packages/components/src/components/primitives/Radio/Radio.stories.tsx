import React from 'react';
import { Meta } from '@storybook/react';
import { Radio } from './Radio';
import { Stack, VStack, StackDivider } from '@chakra-ui/layout';
import { RadioSizes, radioVariants } from './types';
import { RadioGroup } from '@chakra-ui/react';

export default {
  component: Radio,
  title: 'Components/Primitives/Radio',
  argTypes: {
    variant: {
      options: radioVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    <Stack spacing={4} direction="row">
      {RadioSizes.map((size) => (
        <Radio size={size} key={size} value={size} name={size}>
          Label
        </Radio>
      ))}
    </Stack>
    <Stack spacing={4} direction="row">
      {RadioSizes.map((size) => (
        <Radio size={size} key={size} value={size} name={size} isInvalid>
          Label
        </Radio>
      ))}
    </Stack>
    <Stack spacing={4} direction="row">
      {RadioSizes.map((size) => (
        <Radio size={size} key={size} value={size} name="3" isDisabled>
          Label
        </Radio>
      ))}
    </Stack>
    <RadioGroup defaultValue="sm">
      <Stack spacing={4} direction="row">
        {RadioSizes.map((size) => (
          <Radio size={size} key={size} value={size}>
            Label
          </Radio>
        ))}
      </Stack>
    </RadioGroup>

    <Stack spacing={4} direction="row">
      {RadioSizes.map((size) => (
        <Radio size={size} key={size} value={size} isDisabled isChecked>
          Label
        </Radio>
      ))}
    </Stack>
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Radio {...args}></Radio>;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'default',
  size: 'l',
  children: 'Label',
};
