import React from 'react';
import { Meta } from '@storybook/react';
import { Image } from '.';
import { getFigmaDesignLink } from '@components/figmaLinks';

export default {
  component: Image,
  title: 'Components/Primitives/Image',
  parameters: getFigmaDesignLink('image'),
} as Meta;

const Template = (args) => <Image {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  src: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
};
