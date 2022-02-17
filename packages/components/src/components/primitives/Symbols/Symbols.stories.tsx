import React from 'react';
import { Meta } from '@storybook/react';
import { Symbols, SymbolsProps } from '.';

export default {
  component: Symbols,
  title: 'Components/Primitives/Symbols',
  argTypes: {},
} as Meta;

const Template = (args: SymbolsProps) => <Symbols {...args} />;
export const Playground = Template.bind({});

Playground.args = {
  children: 'shift',
};
