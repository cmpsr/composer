import React from 'react';
import { Meta } from '@storybook/react';
import { Dropdown } from '.';

export default {
  component: Dropdown,
  title: 'Components/Primitives/Dropdown',
  argTypes: {},
} as Meta;

const Template = (args) => (
  <Dropdown {...args}>
    <Dropdown.Button>Open</Dropdown.Button>

    <Dropdown.List>
      <Dropdown.Item>Option 1</Dropdown.Item>
      <Dropdown.Item>Option 2</Dropdown.Item>
      <Dropdown.Item>Option 3</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);

export const Default = Template.bind({});

Default.args = {};

export const Opened = Template.bind({});

Opened.args = {
  isOpen: true,
};
