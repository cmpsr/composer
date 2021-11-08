import React from 'react';
import { Meta } from '@storybook/react';
import { TestComponent } from './TestComponent';

export default {
  component: TestComponent,
  title: 'Components/TestComponent',
} as Meta;

const Template = (args: any) => <TestComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello',
};
