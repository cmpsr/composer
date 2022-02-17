import React from 'react';
import { Meta } from '@storybook/react';
import { Symbols } from '.';

export default {
  component: Symbols,
  title: 'Components/Primitives/Symbols',
  argTypes: {},
} as Meta;

const Template = (args) => <Symbols {...args} />;
export const Playground = Template.bind({});

Playground.args = {
  children: 'shift',
};
