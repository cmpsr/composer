import React from 'react';
import { Meta } from '@storybook/react';
import { VStack, StackDivider, HStack } from '@chakra-ui/layout';
import { Tooltip } from '.';
import { tooltipPositions, TooltipProps, tooltipSides } from './types';
import { Box, Button } from 'components';

export default {
  component: Tooltip,
  title: 'Components/Primitives/Tooltip',
  argTypes: {
    side: {
      options: tooltipSides,
      control: { type: 'select' },
    },
    positioning: {
      options: tooltipPositions,
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack
    spacing="2rem"
    p="10rem"
    divider={<StackDivider borderColor="#888" />}
  >
    {tooltipSides.map((side) => (
      <HStack key={side}>
        {tooltipPositions.map((position) => (
          <Tooltip
            key={position}
            side={side}
            positioning={position}
            label="This is the tooltip content. Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap"
          >
            <span>
              <Button>
                {side} - {position}
              </Button>
            </span>
          </Tooltip>
        ))}
      </HStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args: TooltipProps) => (
  <Box py="3rem" px="12rem">
    <Tooltip {...args}>
      <Button>Hover me!</Button>
    </Tooltip>
  </Box>
);

export const Playground = Template.bind({});
Playground.args = {
  side: 'top',
  positioning: 'center',
  label: 'This is the tooltip content.',
};
