import React from 'react';
import { Meta } from '@storybook/react';
import { Divider } from './Divider';

export default {
  component: Divider,
  title: 'Components/Primitives/Divider',
} as Meta;

const AllTemplate = () => <Divider />;

const Template = (args) => <Divider {...args} />;
export const Playground = Template.bind({});

Playground.args = {};
