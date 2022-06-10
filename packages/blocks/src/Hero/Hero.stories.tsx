import React from 'react';
import { Meta } from '@storybook/react';

import { Hero } from './Hero';

export default {
  component: Hero,
  title: 'Blocks/Hero',
} as Meta;

const Template = (args) => <Hero {...args} />;

const defaultArgs = {
  backgroundColor: 'background-page',
  textPairingProps: {
    labelProps: { children: 'The next generation of care for women and families' },
    subLabelProps: {
      children: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
    },
    variant: 'textpairing-header-4XL',
  },
  primaryCta: { children: 'Default', href: '#', variant: 'primary' },
  secondaryCta: { children: 'Default', href: '#', variant: 'primary-alt' },
  contentAlignment: 'start',
  imageProps: { maxWidth: '20rem', src: 'https://avatars0.githubusercontent.com/u/67131017?s=200' },
  imagePosition: 'right',
};

export const ImageLeft = Template.bind({});
ImageLeft.args = {
  ...defaultArgs,
  imagePosition: 'left',
};

export const ContentCentered = Template.bind({});
ContentCentered.args = {
  ...defaultArgs,
  contentAlignment: 'center',
};

export const NoCta = Template.bind({});
NoCta.args = {
  ...defaultArgs,
  primaryCta: undefined,
  secondaryCta: undefined,
};

export const Playground = Template.bind({});
Playground.args = {
  ...defaultArgs,
};
