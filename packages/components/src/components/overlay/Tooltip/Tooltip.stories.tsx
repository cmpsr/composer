import React from 'react';
import { Meta } from '@storybook/react';
import { Box, Button, Tooltip, TooltipProps } from '@components';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const sides = ['auto', 'top', 'bottom', 'left', 'right'];
const positions = ['', '-start', '-end'];
const combinations = sides.map((side) => positions.map((position) => `${side}${position}`));
const placements = [].concat(...combinations);

export default {
  component: Tooltip,
  title: 'Components/Overlay/Tooltip',
  argTypes: {
    placement: {
      options: placements,
      control: { type: 'select' },
      defaultValue: placements[0],
    },
  },
  parameters: {
    chromatic: { delay: 1000 },
  },
} as Meta;

export const All = () => (
  <Table variant="simple">
    <Thead>
      <Tr>
        <Th>Placement</Th>
        <Th>Tooltip</Th>
      </Tr>
    </Thead>
    <Tbody>
      {placements.map((placement) => (
        <Tr key={placement}>
          <Td>{placement}</Td>
          <Td py="3rem">
            <Tooltip label="This is the tooltip content" placement={placement}>
              <Button>{placement}</Button>
            </Tooltip>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export const Opened = () => (
  <Box p="12rem">
    <Tooltip isOpen placement="top" label="This is the tooltip content.">
      <Button size="l">Tooltip already visible!</Button>
    </Tooltip>
  </Box>
);

const Template = (args: TooltipProps) => (
  <Box p="12rem">
    <Tooltip {...args}>
      <Button size="l">Hover me!</Button>
    </Tooltip>
  </Box>
);

export const Playground = Template.bind({});
Playground.args = {
  placement: 'auto',
  label: 'This is the tooltip content.',
};
