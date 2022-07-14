import React from 'react';
import { Meta } from '@storybook/react';
import { Symbol, SymbolProps } from '.';
import { getFigmaDesignLink } from '@theme/figmaLinks';

export default {
  component: Symbol,
  title: 'Components/Primitives/Symbol',
  argTypes: {},
  parameters: getFigmaDesignLink('symbolComponentLink'),
} as Meta;

const Template = (args: SymbolProps) => <Symbol {...args} />;
export const Playground = Template.bind({});

Playground.args = {
  children: 'shift',
};
