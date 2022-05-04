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
            <InlineAlert status={status}>
              <InlineAlert.Icon />
              <InlineAlert.Message>{`${status} message`}</InlineAlert.Message>
            </InlineAlert>
          </Td>
          <Td>
            <InlineAlert status={status}>
              <InlineAlert.Message>{`${status} message`}</InlineAlert.Message>
            </InlineAlert>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const Template = ({ showIcon, message, status }) => (
  <InlineAlert status={status}>
    {showIcon && <InlineAlert.Icon />}
    <InlineAlert.Message>{message}</InlineAlert.Message>
  </InlineAlert>
);

export const Playground = Template.bind({});

Playground.args = {
  showIcon: true,
  message: 'Hello',
  status: 'info',
};
