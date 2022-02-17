import React from 'react';
import { Meta } from '@storybook/react';
import { Symbol, SymbolProps } from '.';

export default {
  component: Symbol,
  title: 'Components/Primitives/Symbol',
  argTypes: {},
} as Meta;

const Template = (args: SymbolProps) => <Symbol {...args} />;
export const Playground = Template.bind({});

Playground.args = {
  children: 'shift',
};
