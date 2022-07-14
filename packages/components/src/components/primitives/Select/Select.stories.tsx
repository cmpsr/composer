import React from 'react';
import { Meta } from '@storybook/react';
import { Select } from '.';
import { iconSizes, selectSizes } from './types';
import { StackDivider, VStack } from '@chakra-ui/react';
import { Text } from '..';
import { getFigmaDesignLink } from '@components/figmaLinks';

export default {
  component: Select,
  title: 'Components/Primitives/Select',
  argTypes: {
    size: {
      options: selectSizes,
      control: { type: 'select' },
    },
    iconSize: {
      options: iconSizes,
      control: { type: 'select' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: getFigmaDesignLink('select'),
} as Meta;

const sizeLabels = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
};

export const All = () => {
  const [values, setValues] = React.useState({});

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {selectSizes.map((size) => (
        <VStack key={size}>
          <Text>{sizeLabels[size]}</Text>
          <Select
            size={size}
            placeholder="Label"
            value={values[`${size}-placeholder`]}
            onChange={(evt) =>
              setValues({
                ...values,
                [`${size}-placeholder`]: evt.target.value,
              })
            }
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            size={size}
            value={values[`${size}-without-placeholder`]}
            onChange={(evt) =>
              setValues({
                ...values,
                [`${size}-without-placeholder`]: evt.target.value,
              })
            }
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select size={size} placeholder="Label" isDisabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            size={size}
            placeholder="Label"
            isInvalid
            value={values[`${size}-invalid`]}
            onChange={(evt) =>
              setValues({
                ...values,
                [`${size}-invalid`]: evt.target.value,
              })
            }
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </VStack>
      ))}
    </VStack>
  );
};

const Template = (args) => (
  <Select {...args}>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </Select>
);
export const Playground = Template.bind({});
Playground.args = {
  size: 'l',
  iconSize: 'l',
  isDisabled: false,
};
