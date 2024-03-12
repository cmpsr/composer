import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Badge } from './Badge';
import { badgeStatuses, badgeVariants } from './types';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export default {
  component: Badge,
  title: 'Components/Data Display/Badge',
  argTypes: {
    status: {
      options: badgeStatuses,
      control: { type: 'select' },
    },
    variant: {
      options: badgeVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Variant</Th>
          <Th>Custom</Th>
          <Th>Accent</Th>
          <Th>Primary</Th>
          <Th>Secondary</Th>
          <Th>Info</Th>
          <Th>Success</Th>
          <Th>Warning</Th>
          <Th>Error</Th>
        </Tr>
      </Thead>
      <Tbody>
        {badgeVariants.map((variant, i) => (
          <Fragment key={i}>
            <Tr>
              <Td>{variant}</Td>

              {badgeStatuses.map((status, i) => (
                <Td key={`${variant}-${status}-${i}`}>
                  <Badge variant={variant} status={status}>
                    {variant}
                  </Badge>
                </Td>
              ))}
            </Tr>
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export const All = AllTemplate.bind({});

const Template = (args) => <Badge {...args}></Badge>;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'solid',
  status: 'primary',
  children: 'Composer badge!',
};
