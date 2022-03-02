import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Select } from '.';
import { selectSizes, selectVariants } from './types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default {
  component: Select,
  title: 'Components/Primitives/Select',
  argTypes: {
    size: {
      options: selectSizes,
      control: { type: 'select' },
    },
    variant: {
      options: selectVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const states = ['default', 'filled', 'error', 'disabled', 'disabled-and-filled'];

const Template = ({ size, variant, state, initialValue, ...rest }) => {
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
      {...rest}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export const All = () => (
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
                  <Template
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

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  variant: 'outline',
  isDisabled: false,
  isInvalid: false,
  placeholder: 'Select an option',
};
