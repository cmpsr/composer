import React from 'react';
import { Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { CheckboxSizes } from './types';
import { Text } from '..';
import { getFigmaDesignLink } from '@theme/figmaLinks';

export default {
  component: Checkbox,
  title: 'Components/Primitives/Checkbox',
  parameters: getFigmaDesignLink('checkbox'),
} as Meta;

const sizeLabels = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
};

export const All = () => {
  const values = [
    { label: 'Default' },
    { label: 'Disabled', props: { isDisabled: true } },
    { label: 'Invalid', props: { isInvalid: true } },
    {
      label: 'Default - Selected',
      props: {
        defaultChecked: true,
      },
    },
    {
      label: 'Disabled - Selected',
      props: {
        defaultChecked: true,
        isDisabled: true,
      },
    },
  ];

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {CheckboxSizes.map((size) => (
        <VStack key={size}>
          <Text variant="text-header-L">{sizeLabels[size]}</Text>
          {values.map((val, key) => (
            <HStack key={key}>
              <Checkbox key={size} size={size} {...val?.props}>
                {val.label}
              </Checkbox>
            </HStack>
          ))}
        </VStack>
      ))}
    </VStack>
  );
};

const Template = (args: CheckboxProps) => <Checkbox {...args}></Checkbox>;
export const Playground = Template.bind({});
Playground.args = {
  size: 'm',
  children: 'Label',
};
