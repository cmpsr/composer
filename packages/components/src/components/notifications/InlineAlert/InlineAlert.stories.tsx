import React from 'react';
import { Meta } from '@storybook/react';
import { InlineAlert } from './InlineAlert';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { alertStatuses } from '@components/notifications';

export default {
  component: InlineAlert,
  title: 'Components/Notifications/InlineAlert',
  argTypes: {
    status: {
      options: alertStatuses,
      control: { type: 'select' },
    },
  },
} as Meta;

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>State</Th>
        <Th>With Icon</Th>
        <Th>Without Icon</Th>
      </Tr>
    </Thead>
    <Tbody>
      {alertStatuses.map((status, i) => (
        <Tr key={`${status}-${i}`}>
          <Td>{status}</Td>
          <Td>
            <InlineAlert status={status} message={`${status} message`} showIcon />
          </Td>
          <Td>
            <InlineAlert status={status} message={`${status} message`} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const Template = (args) => <InlineAlert {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  showIcon: true,
  message: 'Hello',
  status: 'info',
};
