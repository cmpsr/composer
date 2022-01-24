import React from 'react';
import { Meta } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

export default {
  component: Breadcrumb,
  title: 'Components/Primitives/Breadcrumb',
} as Meta;

const Template = (args) => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item isCurrentPage>
      <Breadcrumb.Link href="#">Breadcrumb</Breadcrumb.Link>
    </Breadcrumb.Item>
  </Breadcrumb>
);
export const Playground = Template.bind({});
