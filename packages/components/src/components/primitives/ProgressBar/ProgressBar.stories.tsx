import React from 'react';
import { Meta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { Divider, Box } from '@chakra-ui/react';
import { progressBarSizes } from './types';
import { getFigmaDesignLink } from '@theme/figmaLinks';

export default {
  component: ProgressBar,
  title: 'Components/Primitives/ProgressBar',
  argTypes: {
    size: {
      options: progressBarSizes,
      control: { type: 'select' },
    },
  },
  parameters: getFigmaDesignLink('progressBar'),
} as Meta;

export const All = () =>
  progressBarSizes.map((size, key) => (
    <Box key={key}>
      <ProgressBar value={20} size={size} />
      <Divider my={3} />
    </Box>
  ));

const Template = ({ ...args }) => <ProgressBar {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  value: 60,
};
