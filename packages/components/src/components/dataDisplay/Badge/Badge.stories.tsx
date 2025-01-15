import React, { Fragment } from 'react';
import { Meta } from '@storybook/react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import * as Icons from '../../media/Icons';
import { Badge } from './Badge';
import { badgeStatuses, badgeVariants } from './types';

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
          <Th>State</Th>
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
              <Td rowSpan={5}>{variant}</Td>
            </Tr>
            {[`${variant}`, `${variant} leading icon`, `${variant} trailing icon`, `${variant} both icons`].map(
              (state, i) => (
                <Tr key={`${state}-${i}`}>
                  <Td>{state}</Td>
                  {badgeStatuses.map((status, i) => (
                    <Td key={`${variant}-${status}-${i}`}>
                      <Badge
                        variant={variant}
                        status={status}
                        {...(state.endsWith('leading icon') && {
                          leadingIcon: <Icons.IconEdit />,
                        })}
                        {...(state.endsWith('trailing icon') && {
                          trailingIcon: <Icons.IconEdit />,
                        })}
                        {...(state.endsWith('both icons') && {
                          leadingIcon: <Icons.IconEdit />,
                          trailingIcon: <Icons.IconEdit />,
                        })}
                      >
                        {variant}
                      </Badge>
                    </Td>
                  ))}
                </Tr>
              ),
            )}
          </Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export const All = AllTemplate.bind({});

const Template = ({ showLeadingIcon, showTrailingIcon, ...args }) => (
  <Badge
    {...(showLeadingIcon && { leadingIcon: <Icons.IconEdit /> })}
    {...(showTrailingIcon && { trailingIcon: <Icons.IconEdit /> })}
    {...args}
  />
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'solid',
  status: 'primary',
  children: 'Composer badge!',
  showLeadingIcon: true,
  showTrailingIcon: true,
};
