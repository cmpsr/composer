import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Select } from '.';
import { selectSizes, selectVariants } from './types';
import { StackDivider, VStack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Text } from '..';

export default {
  component: Select,
  title: 'Components/Primitives/Select',
  argTypes: {
    size: {
      options: selectSizes,
      control: { type: 'select' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const sizeLabels = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
};

export const All = () => {
  const [values, setValues] = React.useState({});
  console.log('>>', values);
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      {selectSizes.map((size) => (
        <VStack key={size}>
          <Text>{sizeLabels[size]}</Text>
          <Select
            size={size}
            placeholder="Label"
            value={values[`${size}-placeholder`]}
            // onChange={(evt) =>
            //   setValues({
            //     ...values,
            //     [`${size}-placeholder`]: evt.target.value,
            //   })
            // }
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

const states = ['default', 'filled', 'error', 'disabled', 'disabled-and-filled'];

const SelectTemplate = ({ size, variant, state, initialValue }) => {
  const [value, setValue] = React.useState(initialValue);
  return (
    <Select
      size={size}
      placeholder="Label"
      variant={variant}
      isInvalid={state === 'error'}
      isDisabled={['disabled', 'disabled-and-filled'].includes(state)}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export const T = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variant</Th>
        <Th>State</Th>
        <Th>S</Th>
        <Th>M</Th>
        <Th>L</Th>
      </Tr>
    </Thead>
    <Tbody>
      {selectVariants.map((variant, i) => (
        <Fragment key={i}>
          <Tr>
            <Td rowSpan={6}>{variant}</Td>
          </Tr>
          {states.map((state, i) => (
            <Tr key={`${state}-${i}`}>
              <Td>{state}</Td>
              {selectSizes.map((size, i) => (
                <Td key={`${variant}-${size}-${i}-${state}`}>
                  <SelectTemplate
                    state={state}
                    variant={variant}
                    size={size}
                    initialValue={['filled', 'disabled-and-filled'].includes(state) ? 'option2' : ''}
                  />
                </Td>
              ))}
            </Tr>
          ))}
        </Fragment>
      ))}
    </Tbody>
  </Table>
);

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
  isDisabled: false,
};
