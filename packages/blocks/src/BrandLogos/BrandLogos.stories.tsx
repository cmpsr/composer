import React from 'react';
import { Meta } from '@storybook/react';

import { BrandLogos } from './BrandLogos';

export default {
  component: BrandLogos,
  title: 'Blocks/BrandLogos',
} as Meta;

const Template = (args) => <BrandLogos {...args} />;

const defaultArgs = {
  logos: Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200'),
  backgroundColor: 'background-page',
  textVariant: 'textpairing-header-2XL',
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultArgs,
  title: 'Title',
  textVariant: 'text-header-2XL',
};

export const WithTextPairing = Template.bind({});
WithTextPairing.args = {
  ...defaultArgs,
  title: 'Title',
  description: 'Description',
};

export const Playground = Template.bind({});
Playground.args = { ...defaultArgs, title: 'Title', description: 'Description' };
