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
// const Template = ({ separator, items }) => (
//   <Breadcrumb items={items} separator={separator === '/' ? separator : null} />
// );

const Template = ({ separator }) => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item href="#" leadingIcon={IconWorld} trailingIcon={IconCheck}>
        Composer
      </Breadcrumb.Item>
      {/* <Breadcrumb.Separator /> */}
      <Breadcrumb.Item href="#">Really</Breadcrumb.Item>
      {/* <Breadcrumb.Separator icon="/" /> */}
      <Breadcrumb.Item href="#">Rocks!</Breadcrumb.Item>
      {/* <Breadcrumb.Separator icon={<IconChevronLeft />} /> */}
    </Breadcrumb>
    <Breadcrumb separator="/">
      <Breadcrumb.Item href="#" leadingIcon={IconWorld} trailingIcon={IconCheck}>
        Composer
      </Breadcrumb.Item>
      {/* <Breadcrumb.Separator /> */}
      <Breadcrumb.Item href="#">Really</Breadcrumb.Item>
      {/* <Breadcrumb.Separator icon="/" /> */}
      <Breadcrumb.Item href="#">Rocks!</Breadcrumb.Item>
      {/* <Breadcrumb.Separator icon={<IconChevronLeft />} /> */}
    </Breadcrumb>
    <Breadcrumb separator={<IconChevronLeft />}>
      <Breadcrumb.Item href="#" leadingIcon={IconWorld} trailingIcon={IconCheck}>
        Composer
      </Breadcrumb.Item>
      {/* <Breadcrumb.Separator /> */}
      <Breadcrumb.Item href="#">Really</Breadcrumb.Item>
      {/* <Breadcrumb.Separator icon="/" /> */}
      <Breadcrumb.Item href="#">Rocks!</Breadcrumb.Item>
      {/* <Breadcrumb.Separator icon={<IconChevronLeft />} /> */}
    </Breadcrumb>
  </>
);
export const Playground = Template.bind({});

Playground.args = {
  items,
  separator: 'icon',
};
