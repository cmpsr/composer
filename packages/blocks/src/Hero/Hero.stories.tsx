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
  title: 'The next generation of care for women and families',
  description: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
  primaryCta: { copy: 'Default', href: '#', variant: 'primary' },
  secondaryCta: { copy: 'Default', href: '#', variant: 'primary-alt' },
  contentAlignment: 'start',
  imageUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
  imageProps: { maxWidth: '20rem' },
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
