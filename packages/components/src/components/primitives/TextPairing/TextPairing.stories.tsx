import React from 'react';
import { Meta } from '@storybook/react';
import { TextPairing, textPairingVariants } from '.';
import { Box } from '@chakra-ui/layout';

export default {
  component: TextPairing,
  title: 'Components/Primitives/TextPairing',
} as Meta;

const Template = (args) => (
  <Box bg="white" py="2rem">
    <TextPairing {...args} />
  </Box>
);
export const Playground = Template.bind({});
Playground.args = {
  variant: textPairingVariants[0],
  label: 'Label',
  subLabel: 'SubLabel',
};
