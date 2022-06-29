import React from 'react';
import { Meta } from '@storybook/react';

import { Hero } from './Hero';

export default {
  component: Hero,
  title: 'Blocks/Hero',
  argTypes: {
    variant: {
      options: ['right', 'left'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const ImageLeft = () => (
  <Hero>
    <Hero.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
    <Hero.Content>
      <Hero.TextPairing
        labelProps={{ children: 'The next generation of care for women and families' }}
        subLabelProps={{
          children: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
        }}
        variant="textpairing-header-4XL"
      />
      <Hero.LinkGroup>
        <Hero.Link children="Default" variant="primary" />
        <Hero.Link children="Default" variant="primary-alt" />
      </Hero.LinkGroup>
    </Hero.Content>
  </Hero>
);

export const ContentCentered = () => (
  <Hero>
    <Hero.Content contentAlignment="center">
      <Hero.TextPairing
        labelProps={{ children: 'The next generation of care for women and families' }}
        subLabelProps={{
          children: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
        }}
        variant="textpairing-header-4XL"
      />
      <Hero.LinkGroup>
        <Hero.Link children="Default" variant="primary" />
        <Hero.Link children="Default" variant="primary-alt" />
      </Hero.LinkGroup>
    </Hero.Content>
    <Hero.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
  </Hero>
);

export const NoCta = () => (
  <Hero>
    <Hero.Content contentAlignment="start">
      <Hero.TextPairing
        labelProps={{ children: 'The next generation of care for women and families' }}
        subLabelProps={{
          children: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
        }}
        variant="textpairing-header-4XL"
      />
    </Hero.Content>
    <Hero.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
  </Hero>
);

const Template = ({ variant, label, subLabel, contentAlignment, primaryCtaCopy, secondaryCtaCopy }) => (
  <Hero flexDirection={{ base: 'column', lg: variant === 'left' ? 'row' : 'row-reverse' }}>
    <Hero.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
    <Hero.Content contentAlignment={contentAlignment}>
      <Hero.TextPairing
        labelProps={{ children: label }}
        subLabelProps={{
          children: subLabel,
        }}
        variant="textpairing-header-4XL"
      />
      <Hero.LinkGroup>
        <Hero.Link children={primaryCtaCopy} variant="primary" />
        <Hero.Link children={secondaryCtaCopy} variant="primary-alt" />
      </Hero.LinkGroup>
    </Hero.Content>
  </Hero>
);

export const Playground = Template.bind({});
Playground.args = {
  label: 'The next generation of care for women and families',
  subLabel: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
  contentAlignment: 'start',
  variant: 'right',
  primaryCtaCopy: 'Default',
  secondaryCtaCopy: 'Default',
};
