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
  logosMaxHeight: '12.5rem',
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultArgs,
  textProps: { children: 'Title', variant: 'text-header-2XL' },
};

export const WithTextPairing = Template.bind({});
WithTextPairing.args = {
  ...defaultArgs,
  textProps: {
    labelProps: { children: 'Title' },
    subLabelProps: { children: 'Description' },
    variant: 'textpairing-header-2XL',
  },
};

export const Playground = Template.bind({});
Playground.args = {
  ...defaultArgs,
  textProps: {
    labelProps: { children: 'Title' },
    subLabelProps: { children: 'Description' },
    variant: 'textpairing-header-2XL',
  },
};
