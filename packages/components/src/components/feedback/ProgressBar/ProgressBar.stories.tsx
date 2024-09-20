import React from 'react';
import { Meta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { Divider, Box, Text } from '@chakra-ui/react';
import { progressBarSizes } from './types';

export default {
  component: ProgressBar,
  title: 'Components/Feedback/ProgressBar',
  argTypes: {
    size: {
      options: progressBarSizes,
      control: { type: 'select' },
    },
    isRound: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'number' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <>
    <Text mb="1rem">Progress Bar</Text>
    {progressBarSizes.map((size, key) => (
      <Box key={key}>
        <ProgressBar value={20} size={size} />
        <Divider my={3} />
      </Box>
    ))}
    <Text mb="1rem">Progress Bar rounded</Text>
    {progressBarSizes.map((size, key) => (
      <Box key={key}>
        <ProgressBar value={20} size={size} isRound />
        <Divider my={3} />
      </Box>
    ))}
  </>
);

export const All = AllTemplate.bind({});

const Template = ({ ...args }) => <ProgressBar {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  size: 'l',
  value: 60,
  isRound: false,
};
