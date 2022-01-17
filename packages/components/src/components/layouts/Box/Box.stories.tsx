import React from 'react';
import { Meta } from '@storybook/react';
import { Box } from './Box';

export default {
  component: Box,
  title: 'Components/Layouts/Box',
} as Meta;

const Template = (args) => <Box {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  children: "I'm a Box",
  border: '1px solid var(--chakra-colors-primary-default)',
  padding: 'spacer-3',
};
