import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { PinInput } from './PinInput';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { pinInputSizes, pinInputVariants } from './types';

export default {
  component: PinInput,
  title: 'Components/Primitives/PinInput',
  argTypes: {
    variant: {
      options: pinInputVariants,
      control: { type: 'select' },
    },
    size: {
      options: pinInputSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const states = ['default', 'filled', 'error', 'disabled', 'disabled-and-filled'];

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Variant</Th>
        <Th>State</Th>
        <Th textAlign="center">S</Th>
        <Th textAlign="center">M</Th>
        <Th textAlign="center">L</Th>
      </Tr>
    </Thead>
    <Tbody>
      {pinInputVariants.map((variant, i) => (
        <Fragment key={i}>
          <Tr>
            <Td rowSpan={6}>{variant}</Td>
          </Tr>
          {states.map((state, i) => (
            <Tr>
              <Td>{state}</Td>
              {pinInputSizes.map((size, i) => (
                <Td>
                  <PinInput
                    size={size}
                    variant={variant}
                    type="alphanumeric"
                    numOfDigits={4}
                    isDisabled={['disabled', 'disabled-and-filled'].includes(state)}
                    defaultValue={
                      ['filled', 'disabled-and-filled'].includes(state) ? `${size}${size}${size}${size}` : ''
                    }
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

const Template = (args) => <PinInput {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  variant: 'outline',
  size: 'l',
  numOfDigits: 4,
  isInvalid: false,
  isDisabled: false,
};
