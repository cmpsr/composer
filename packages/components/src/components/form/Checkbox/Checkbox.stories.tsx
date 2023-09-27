import React from 'react';
import { Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';
import { HStack, StackDivider, VStack } from '@chakra-ui/layout';
import { CheckboxSizes } from './types';
import { Text } from '../../typography';

export default {
  component: Checkbox,
  title: 'Components/Form/Checkbox',
  argTypes: {
    size: {
      options: CheckboxSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const sizeLabels = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
};

const AllTemplate = () => {
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
export const All = AllTemplate.bind({});

const Template = (args: CheckboxProps) => <Checkbox {...args}></Checkbox>;

export const WithLongText = Template.bind({});
WithLongText.args = {
  size: 'm',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at mauris quis mauris venenatis volutpat eget vel ex. Vivamus molestie diam sit amet mi aliquam dapibus. Etiam accumsan maximus libero. Quisque rutrum enim at felis luctus, hendrerit interdum nibh ullamcorper. Fusce ornare odio velit, et auctor nisi vestibulum quis. Cras et massa et dui dapibus lacinia at non quam. Mauris congue vitae elit eu pellentesque. In nisl dolor, vestibulum vel quam sit amet, fringilla fermentum orci. Nullam a ullamcorper purus. Morbi egestas quam sit amet lectus aliquet, at maximus tellus tempor. Nullam tellus libero, tempor eu sapien in, rhoncus rutrum libero.',
};

export const Playground = Template.bind({});
Playground.args = {
  size: 'm',
  children: 'Label',
};
