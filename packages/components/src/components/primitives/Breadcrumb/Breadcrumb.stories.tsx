import React from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { IconCheck, IconWorld } from '..';

export default {
  component: Breadcrumb,
  title: 'Components/Primitives/Breadcrumb',
  argTypes: {
    separator: {
      options: ['icon', '/'],
      control: { type: 'select' },
    },
  },
} as Meta;

const items = [
  {
    leadingIcon: IconWorld,
    trailingIcon: IconCheck,
    text: 'Composer',
    href: '#',
  },
  {
    text: 'Really',
    href: '#',
  },
  {
    text: 'Rocks!',
  },
];
const Template = ({ separator, items }) => (
  <Breadcrumb items={items} separator={separator === '/' ? separator : null} />
);
export const Playground = Template.bind({});

Playground.args = {
  items,
  separator: 'icon',
};
