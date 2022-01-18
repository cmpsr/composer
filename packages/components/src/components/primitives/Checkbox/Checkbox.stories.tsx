import React from 'react';
import { Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { CheckboxSizes } from './types';

export default {
  component: Checkbox,
  title: 'Components/Primitives/Checkbox',
} as Meta;

const AllTemplate = () => {
  const values = [
    { label: 'Default' },
    { label: 'Disabled', props: { isDisabled: true } },
    { label: 'Invalid', props: { isInvalid: true } },
    {
      label: 'Default - Selected',
      props: {
        defaultIsChecked: true,
      },
    },
    {
      label: 'Disabled - Selected',
      props: {
        defaultIsChecked: true,
        isDisabled: true,
      },
    },
  ];

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {values.map((val, key) => (
        <HStack key={key}>
          {CheckboxSizes.map((size) => (
            <Checkbox key={size} size={size} {...val?.props}>
              {val.label}
            </Checkbox>
          ))}
        </HStack>
      ))}
    </VStack>
  );
};
export const All = AllTemplate.bind({});

const Template = (args) => <Checkbox {...args} defaultIsChecked></Checkbox>;
export const Playground = Template.bind({});
Playground.args = {
  size: 'md',
  children: 'Label',
};
