import React from 'react';
import { Meta } from '@storybook/react';
import { HStack, StackDivider, VStack } from '@chakra-ui/react';
import { Text } from '..';
import { Switch } from '.';
import { switchLabelPositions, switchSizes } from './types';

export default {
  component: Switch,
  title: 'Components/Primitives/Switch',
  argTypes: {
    size: {
      options: switchSizes,
      control: { type: 'select' },
    },
    labelPosition: {
      option: switchLabelPositions,
      control: { type: 'select' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} as Meta;

const sizeLabels = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
};

const AllTemplate = () => {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {switchSizes.map((size) => (
        <HStack key={size}>
          <Text>{sizeLabels[size]}</Text>
          {switchLabelPositions.map((labelPosition) => (
            <Switch
              key={labelPosition}
              size={size}
              labelPosition={labelPosition}
              label="Test"
            />
          ))}
        </HStack>
      ))}
    </VStack>
  );
};

export const All = AllTemplate.bind({});

const Template = (args) => <Switch {...args} />;
export const Playground = Template.bind({});

Playground.args = {
  size: 's',
  labelPosition: 'left',
  isDisabled: false,
  label: 'Label',
};
