import React from 'react';
import { Meta } from '@storybook/react';
import { Stack, HStack, VStack } from '@chakra-ui/layout';
import { Popover } from './Popover';
import { popoverPositionings } from './types';
import { Button, TextPairing, Text } from '@components';

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

const AllTemplate = ({ positioning, children }) => (
  <Popover key={positioning} placement={positioning}>
    <Popover.Trigger>{children}</Popover.Trigger>
    <Popover.Content>
      <Popover.Arrow />
      <Popover.CloseButton />
      <Popover.Header>
        <TextPairing label="Header" subLabel="Subtitle" subLabelColor="text-secondary" />
      </Popover.Header>
      <Popover.Body>
        <Text variant="text-body-regular">Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap</Text>
      </Popover.Body>
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
    </Popover.Content>
  </Popover>
);

export const All = () => (
  <Stack py="15rem" px="40rem" spacing={4}>
    <HStack justifyContent="center">
      <AllTemplate positioning="top">
        <Button>Click me - Top</Button>
      </AllTemplate>
    </HStack>
    <HStack justifyContent="space-between">
      <AllTemplate positioning="left">
        <Button>Click me - Left</Button>
      </AllTemplate>
      <AllTemplate positioning="right">
        <Button>Click me - Right</Button>
      </AllTemplate>
    </HStack>
    <HStack justifyContent="center">
      <AllTemplate positioning="bottom">
        <Button>Click me - Bottom</Button>
      </AllTemplate>
    </HStack>
  </Stack>
);

const PlaygroundTemplate = ({ positioning, showCloseButton, showFooter }) => (
  <VStack padding="15rem">
    <Popover placement={positioning} isOpen={true}>
      <Popover.Trigger>
        <Button>Button</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Arrow />
        {showCloseButton && <Popover.CloseButton />}
        <Popover.Header>
          <TextPairing label="Header" subLabel="Subtitle" subLabelColor="text-secondary" />
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
  </VStack>
);

export const Playground = PlaygroundTemplate.bind({});

Playground.args = {
  positioning: 'bottom',
  showCloseButton: true,
  showFooter: true,
};
