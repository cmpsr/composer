import React from 'react';
import { Meta } from '@storybook/react';
import { DummyBlock } from './DummyBlock';

export default {
  component: DummyBlock,
  title: 'Blocks/DummyBlock'
} as Meta;

const Template = ({ args }) => (
  <DummyBlock {...args}>
    Dummy Block
  </DummyBlock>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
};
