import React from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { IconCheck, IconWorld } from '..';
import { IconChevronLeft } from '@components';

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

const Template = (args) => (
  <>
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="#" leadingIcon={IconWorld} trailingIcon={IconCheck}>
        Composer
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Really</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Rocks!</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb {...args} separator="/">
      <Breadcrumb.Item href="#" leadingIcon={IconWorld} trailingIcon={IconCheck}>
        Composer
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Really</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Rocks!</Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb {...args} separator={<IconChevronLeft />}>
      <Breadcrumb.Item href="#" leadingIcon={IconWorld} trailingIcon={IconCheck}>
        Composer
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Really</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Rocks!</Breadcrumb.Item>
    </Breadcrumb>
  </>
);
export const Playground = Template.bind({});

Playground.args = {
  separator: 'icon',
};
