import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { NumberInput, NumberInputProps } from '.';
import { inputSizes, inputVariants } from '@components';

export default {
  component: NumberInput,
  title: 'Components/Primitives/NumberInput',
  argTypes: {
    variant: {
      options: inputVariants,
      control: { type: 'select' },
    },
    size: {
      options: inputSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = ({ variant, size, state, ...rest }: NumberInputProps & { state: string }) => (
  <NumberInput
    maxWidth="12.5rem"
    variant={variant}
    size={size}
    isDisabled={['disabled', 'disabled-and-filled'].includes(state)}
    isInvalid={state === 'error'}
    defaultValue={['filled', 'disabled-and-filled'].includes(state) && 10}
    {...rest}
  >
    <NumberInput.Field placeholder="Placeholder" />
    <NumberInput.Stepper>
      <NumberInput.IncrementStepper />
      <NumberInput.DecrementStepper />
    </NumberInput.Stepper>
  </NumberInput>
);

const states = ['default', 'filled', 'error', 'disabled', 'disabled-and-filled'];

export const All = () => {
  return (
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
        {inputVariants.map((variant, i) => (
          <Fragment key={i}>
            <Tr>
              <Td rowSpan={6}>{variant}</Td>
            </Tr>
            {states.map((state, i) => (
              <Tr key={`${state}-${i}`}>
                <Td>{state}</Td>
                {inputSizes.map((size, i) => (
                  <Td key={`${variant}-${size}-${i}-${state}`}>
                    <Template variant={variant} size={size} state={state} />
                  </Td>
                ))}
              </Tr>
            ))}
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export const Playground = Template.bind({});

Playground.args = {
  variant: 'outline',
  size: 'l',
  placeholder: 'Placeholder',
  isInvalid: false,
  isDisabled: false,
  step: 1,
};
