import React from 'react';
import { Meta } from '@storybook/react';
import { Stack, HStack, VStack } from '@chakra-ui/layout';
import { Button, TextPairing, Text } from '@components';
import { Popover } from './Popover';
import { popoverPositionings } from './types';

export default {
  component: Popover,
  title: 'Components/Primitives/Popover',
  argTypes: {
    positioning: {
      options: popoverPositionings,
      control: { type: 'select' },
    },
  },
} as Meta;

const PopoverTemplate = ({ positioning, showCloseButton = true, showFooter = true, children, ...rest }) => (
  <Popover placement={positioning} {...rest}>
    <Popover.Trigger>{children}</Popover.Trigger>
    <Popover.Content>
      <Popover.Arrow />
      {showCloseButton && <Popover.CloseButton />}
      <Popover.Header>
        <TextPairing label="Header" labelColor="text-primary" subLabel="Subtitle" subLabelColor="text-secondary" />
      </Popover.Header>
      <Popover.Body>
        <Text variant="text-body-regular">Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap</Text>
      </Popover.Body>
      {showFooter && (
        <Popover.Footer>
          <Button
            data-testid="cmpsr.popover.primary.action"
            flex="1"
            variant="primary"
            onClick={() => alert('Primary action')}
          >
            Primary
          </Button>
          <Button
            data-testid="cmpsr.popover.primary.action"
            flex="1"
            variant="primary-alt"
            onClick={() => alert('Secondary action')}
          >
            Secondary
          </Button>
        </Popover.Footer>
      )}
    </Popover.Content>
  </Popover>
);

export const All = () => (
  <Stack py="15rem" alignItems="center">
    <Stack width="50%">
      <HStack justifyContent="center">
        <PopoverTemplate positioning="top">
          <Button>Click me - Top</Button>
        </PopoverTemplate>
      </HStack>
      <HStack justifyContent="space-between">
        <PopoverTemplate positioning="left">
          <Button>Click me - Left</Button>
        </PopoverTemplate>
        <PopoverTemplate positioning="right">
          <Button>Click me - Right</Button>
        </PopoverTemplate>
      </HStack>
      <HStack justifyContent="center">
        <PopoverTemplate positioning="bottom">
          <Button>Click me - Bottom</Button>
        </PopoverTemplate>
      </HStack>
    </Stack>
  </Stack>
);

const PlaygroundTemplate = (props) => (
  <VStack padding="15rem">
    <PopoverTemplate isOpen={true} {...props}>
      <Button>Button</Button>
    </PopoverTemplate>
  </VStack>
);

export const Playground = PlaygroundTemplate.bind({});

Playground.args = {
  positioning: 'bottom',
  showCloseButton: true,
  showFooter: true,
};
