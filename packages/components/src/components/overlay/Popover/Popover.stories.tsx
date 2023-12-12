import React from 'react';
import { Meta } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '@components/form';

export default {
  component: Popover,
  title: 'Components/Overlay/Popover',
} as Meta;

const Template = (args) => (
  <Popover {...args}>
    <Popover.Trigger>
      <Button>Trigger</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.Arrow />
      <Popover.CloseButton />
      <Popover.Header>Header</Popover.Header>
      <Popover.Body>Body</Popover.Body>
    </Popover.Content>
  </Popover>
);

export const Opened = Template.bind({});

Opened.args = {
  isOpen: true,
};

export const Playground = Template.bind({});

Playground.args = {
  closeOnBlur: false,
  placement: 'auto',
  trigger: 'hover',
};
