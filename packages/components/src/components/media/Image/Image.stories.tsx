import React from 'react';
import { Meta } from '@storybook/react';
import { Image } from '.';

export default {
  component: Image,
  title: 'Components/Media/Image',
} as Meta;

const Template = (args) => <Image {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  src: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
};
