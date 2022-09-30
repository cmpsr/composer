import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Textarea } from './Textarea';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { textareaSizes, textareaVariants } from './types';

export default {
  component: Textarea,
  title: 'Components/Form/Textarea',
  argTypes: {
    size: {
      options: textareaSizes,
      control: { type: 'select' },
    },
    variant: {
      options: textareaVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const states = ['default', 'filled', 'error', 'disabled', 'disabled-and-filled'];

const AllTemplate = () => (
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
      {textareaVariants.map((variant, i) => (
        <Fragment key={`${variant}-${i}`}>
          <Tr>
            <Td rowSpan={6}>{variant}</Td>
          </Tr>
          {states.map((state, i) => (
            <Tr key={`${variant}-${state}-${i}`}>
              <Td>{state}</Td>
              {textareaSizes.map((size, i) => (
                <Td key={`${variant}-${state}-${size}-${i}`}>
                  <Textarea
                    key={size}
                    placeholder="Text input area..."
                    size={size}
                    variant={variant}
                    isDisabled={['disabled', 'disabled-and-filled'].includes(state)}
                    isInvalid={state === 'error'}
                    defaultValue={['filled', 'disabled-and-filled'].includes(state) ? 'Filled text input area...' : ''}
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

export const All = AllTemplate.bind({});

const Template = (args) => <Textarea {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  size: 's',
  variant: 'outline',
  isInvalid: false,
  isDisabled: false,
  placeholder: 'Placeholder',
};
