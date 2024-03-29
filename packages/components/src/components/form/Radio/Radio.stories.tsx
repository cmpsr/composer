import React from 'react';
import { Meta } from '@storybook/react';
import { Radio, RadioGroup } from './index';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/layout';
import { radioSizes } from './types';

export default {
  component: Radio,
  title: 'Components/Form/Radio',
  argTypes: {
    size: {
      options: radioSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

const states = ['default', 'error', 'disabled', 'disabled-and-checked'];

const TemplateRadioGroup = ({ state = 'default', numOfRadios = 2, ...rest }) => {
  const radios = Array.from(Array(numOfRadios).keys());

  return (
    <RadioGroup defaultValue={state === 'disabled-and-checked' ? '0' : ''}>
      <Stack direction="row">
        {radios.map((item) => (
          <Radio
            key={item}
            value={item.toString()}
            isInvalid={state === 'error'}
            isDisabled={['disabled', 'disabled-and-checked'].includes(state)}
            {...{ ...(state === 'disabled-and-checked' && { isChecked: true }) }}
            {...rest}
          >
            {`Radio ${item + 1}`}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>State</Th>
        <Th textAlign="center">S</Th>
        <Th textAlign="center">M</Th>
        <Th textAlign="center">L</Th>
      </Tr>
    </Thead>
    <Tbody>
      {states.map((state, i) => (
        <Tr key={`${state}-${i}`}>
          <Td>{state}</Td>
          {radioSizes.map((size, i) => (
            <Td key={`${state}-${size}-${i}`}>
              <TemplateRadioGroup state={state} size={size} />
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const Template = ({ ...args }) => <TemplateRadioGroup {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  isInvalid: false,
  isDisabled: false,
  numOfRadios: 3,
};
