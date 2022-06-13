import React from 'react';
import { Meta } from '@storybook/react';

import { Hero } from './Hero';

export default {
  component: Hero,
  title: 'Blocks/Hero',
} as Meta;

export const ImageLeft = () => (
  <Hero
    imagePosition="left"
    backgroundColor="background-page"
    textPairingProps={{
      labelProps: { children: 'The next generation of care for women and families' },
      subLabelProps: {
        children: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
      },
      variant: 'textpairing-header-4XL',
    }}
    primaryCta={{ children: 'Default', href: '#', variant: 'primary' }}
    secondaryCta={{ children: 'Default', href: '#', variant: 'primary-alt' }}
    contentAlignment="start"
    imageProps={{ maxWidth: '20rem', src: 'https://avatars0.githubusercontent.com/u/67131017?s=200' }}
  />
);

export const ContentCentered = () => (
  <Hero
    imagePosition="right"
    backgroundColor="background-page"
    textPairingProps={{
      labelProps: { children: 'The next generation of care for women and families' },
      subLabelProps: {
        children: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
      },
      variant: 'textpairing-header-4XL',
    }}
    primaryCta={{ children: 'Default', href: '#', variant: 'primary' }}
    secondaryCta={{ children: 'Default', href: '#', variant: 'primary-alt' }}
    contentAlignment="center"
    imageProps={{ maxWidth: '20rem', src: 'https://avatars0.githubusercontent.com/u/67131017?s=200' }}
  />
);

export const NoCta = () => (
  <Hero
    imagePosition="right"
    backgroundColor="background-page"
    textPairingProps={{
      labelProps: { children: 'The next generation of care for women and families' },
      subLabelProps: {
        children: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
      },
      variant: 'textpairing-header-4XL',
    }}
    contentAlignment="center"
    imageProps={{ maxWidth: '20rem', src: 'https://avatars0.githubusercontent.com/u/67131017?s=200' }}
  />
);

const Template = ({
  backgroundColor,
  textPairingProps,
  primaryCta,
  secondaryCta,
  contentAlignment,
  imageProps,
  imagePosition,
}) => (
  <Hero
    backgroundColor={backgroundColor}
    textPairingProps={textPairingProps}
    primaryCta={primaryCta}
    secondaryCta={secondaryCta}
    contentAlignment={contentAlignment}
    imageProps={imageProps}
    imagePosition={imagePosition}
  />
);

export const Playground = Template.bind({});
Playground.args = {
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
