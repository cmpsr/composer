import React from 'react';
import { Meta } from '@storybook/react';
import { StackDivider, VStack } from '@chakra-ui/layout';
import { Popover } from './Popover';
import { popoverPositionings } from './types';
import { Button, Text } from '..';
import { Box } from 'components';

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

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} padding="10rem" spacing={4}>
    {popoverPositionings.map((positioning) => {
      return (
        <Popover
          key={positioning}
          positioning={positioning}
          showFooter
          headerProps={{ label: 'Header', subtitle: 'Subtitle', showCloseButton: true }}
          footerProps={{
            primaryAction: { label: 'Primary', onClick: () => alert('Primary action') },
            secondaryAction: { label: 'Secondary', onClick: () => alert('Secondary action') },
          }}
          content={<Text>Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap</Text>}
        >
          <Button>Click me {positioning}</Button>
        </Popover>
      );
    })}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => (
  <Box p="24rem">
    <Popover {...args} content={<Text>Popover content</Text>}>
      <Button>Click me</Button>
    </Popover>
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  positioning: 'bottom',
  showFooter: true,
  headerProps: { label: 'Header', subtitle: 'Subtitle', showCloseButton: true },
  footerProps: {
    primaryAction: { label: 'Primary', onClick: () => alert('Primary action') },
    secondaryAction: { label: 'Secondary', onClick: () => alert('Secondary action') },
  },
};
