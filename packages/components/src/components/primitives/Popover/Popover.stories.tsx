import React from 'react';
import { Meta } from '@storybook/react';
import { StackDivider, VStack } from '@chakra-ui/layout';
import { Popover } from './Popover';
import { popoverPositionings } from './types';
import { Box, Button } from 'components';

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
          headerProps={{ label: 'Header', subtitle: 'Subtitle', showCloseButton: true }}
          footerProps={{
            primaryAction: { label: 'Primary', onClick: () => alert('Primary action') },
            secondaryAction: { label: 'Secondary', onClick: () => alert('Secondary action') },
          }}
          body="Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap Swap"
        >
          <Button>Click me {positioning}</Button>
        </Popover>
      );
    })}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => (
  <Box px="20rem" py="14rem">
    <Popover {...args} body={'Popover body'}>
      <Button>Click me</Button>
    </Popover>
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  positioning: 'bottom',
  headerProps: { label: 'Header', subtitle: 'Subtitle', showCloseButton: true },
  footerProps: {
    primaryAction: { label: 'Primary', onClick: () => alert('Primary action') },
    secondaryAction: { label: 'Secondary', onClick: () => alert('Secondary action') },
  },
};
