import React from 'react';
import { Meta } from '@storybook/react';
import { CloseButton, closeButtonSizes } from '.';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default {
  component: CloseButton,
  title: 'Components/Other/CloseButton',
  argTypes: {
    size: {
      options: closeButtonSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>S</Th>
        <Th>M</Th>
        <Th>L</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        {closeButtonSizes.map((size) => (
          <Td key={size}>
            <CloseButton key={size} size={size} />
          </Td>
        ))}
      </Tr>
    </Tbody>
  </Table>
);

const Template = (args) => <CloseButton {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
};
