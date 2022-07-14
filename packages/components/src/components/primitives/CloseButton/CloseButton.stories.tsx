import React from 'react';
import { Meta } from '@storybook/react';
import { CloseButton, closeButtonSizes } from '.';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { getFigmaDesignLink } from '@components/figmaLinks';

export default {
  component: CloseButton,
  title: 'Components/Primitives/CloseButton',
  argTypes: {
    size: {
      options: closeButtonSizes,
      control: { type: 'select' },
    },
  },
  parameters: getFigmaDesignLink('closeButton'),
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
