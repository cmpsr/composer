import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { NumberInput } from '.';
import { inputSizes, inputVariants } from '../Input/types';

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
                    <NumberInput
                      variant={variant}
                      size={size}
                      isDisabled={['disabled', 'disabled-and-filled'].includes(state)}
                      isInvalid={state === 'error'}
                      defaultValue={['filled', 'disabled-and-filled'].includes(state) && 10}
                    >
                      <NumberInput.Field placeholder="Placeholder" />
                      <NumberInput.Stepper>
                        <NumberInput.IncrementStepper />
                        <NumberInput.DecrementStepper />
                      </NumberInput.Stepper>
                    </NumberInput>
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

// export const All = AllTemplate.bind({});

// const Template = (args) => (
//   <NumberInput
//     {...{
//       ...(args.showLeadingIcon && {
//         leadingIcon: <IconCloud />,
//       }),
//     }}
//     {...args}
//   />
// );
// export const Playground = Template.bind({});
// Playground.args = {
//   variant: 'outline',
//   size: 'l',
//   placeholder: 'Placeholder',
//   leftLabel: '',
//   rightLabel: '',
//   isInvalid: false,
//   isDisabled: false,
//   showLeadingIcon: true,
// };
