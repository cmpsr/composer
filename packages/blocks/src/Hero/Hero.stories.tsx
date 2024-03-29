import React from 'react';
import { Meta } from '@storybook/react';
import { IconMail } from '@cmpsr/components';

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
    <Hero.Image width="100%" src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
    <Hero.Content maxWidth={{ lg: '24.375rem', xl: '32.125rem' }}>
      <Hero.Title variant="textpairing-header-4XL">
        <Hero.Title.Label>The next generation of care for women and families</Hero.Title.Label>
        <Hero.Title.SubLabel>
          We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
        </Hero.Title.SubLabel>
      </Hero.Title>
      <Hero.Actions>
        <Hero.Action children="Default" variant="primary" />
        <Hero.Action children="Default" variant="primary-alt" />
      </Hero.Actions>
    </Hero.Content>
  </Hero>
);

export const ContentCentered = () => (
  <Hero>
    <Hero.Content contentAlignment="center" maxWidth={{ lg: '24.375rem', xl: '32.125rem' }}>
      <Hero.Title variant="textpairing-header-4XL">
        <Hero.Title.Label>The next generation of care for women and families</Hero.Title.Label>
        <Hero.Title.SubLabel>
          We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
        </Hero.Title.SubLabel>
      </Hero.Title>
      <Hero.Actions>
        <Hero.Action children="Default" variant="primary" />
        <Hero.Action children="Default" variant="primary-alt" />
      </Hero.Actions>
    </Hero.Content>
    <Hero.Image width="100%" src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
  </Hero>
);

export const NoCta = () => (
  <Hero>
    <Hero.Content contentAlignment="start" maxWidth={{ lg: '24.375rem', xl: '32.125rem' }}>
      <Hero.Title variant="textpairing-header-4XL">
        <Hero.Title.Label>The next generation of care for women and families</Hero.Title.Label>
        <Hero.Title.SubLabel>
          We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
        </Hero.Title.SubLabel>
      </Hero.Title>
    </Hero.Content>
    <Hero.Image width="100%" src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
  </Hero>
);

export const All = () => (
  <Hero>
    <Hero.Content maxWidth={{ lg: '24.375rem', xl: '32.125rem' }}>
      <Hero.ContentContainer>
        <Hero.Tag>Hello</Hero.Tag>
        <Hero.Overline>BREAKING NEWS</Hero.Overline>
        <Hero.Title variant="textpairing-header-4XL">
          <Hero.Title.Label>There is life elsewhere in the universe</Hero.Title.Label>
          <Hero.Title.SubLabel color="text-secondary">
            We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
            three ways we could find it.
          </Hero.Title.SubLabel>
        </Hero.Title>
      </Hero.ContentContainer>
      <Hero.ContentContainer gap="1.5rem">
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.Title>
            <Hero.MediaBlock.Title.Label>Label</Hero.MediaBlock.Title.Label>
            <Hero.MediaBlock.Title.SubLabel>SubLabel</Hero.MediaBlock.Title.SubLabel>
          </Hero.MediaBlock.Title>
        </Hero.MediaBlock>
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.Title>
            <Hero.MediaBlock.Title.Label>Label</Hero.MediaBlock.Title.Label>
            <Hero.MediaBlock.Title.SubLabel>SubLabel</Hero.MediaBlock.Title.SubLabel>
          </Hero.MediaBlock.Title>
        </Hero.MediaBlock>
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.Title>
            <Hero.MediaBlock.Title.Label>Label</Hero.MediaBlock.Title.Label>
            <Hero.MediaBlock.Title.SubLabel>SubLabel</Hero.MediaBlock.Title.SubLabel>
          </Hero.MediaBlock.Title>
        </Hero.MediaBlock>
      </Hero.ContentContainer>
      <Hero.ContentContainer>
        <Hero.Actions alignItems={{ base: 'center', md: 'start' }}>
          <Hero.Action children="Default" variant="primary" />
          <Hero.Action children="Default" variant="primary-alt" />
        </Hero.Actions>
        <Hero.Disclaimer>
          *By clicking on Launch Mission you accept our space laws and rules for traveling through the universe.
        </Hero.Disclaimer>
        <Hero.Action size="s" children="I need help >" />
      </Hero.ContentContainer>
      <Hero.ContentContainer flexDirection="row">
        <Hero.Action size="l" leadingIcon={<IconMail />} />
        <Hero.Action size="l" leadingIcon={<IconMail />} />
        <Hero.Action size="l" leadingIcon={<IconMail />} />
        <Hero.Action size="l" leadingIcon={<IconMail />} />
      </Hero.ContentContainer>
    </Hero.Content>
    <Hero.Image width="100%" src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
  </Hero>
);

const Template = ({
  variant,
  label,
  subLabel,
  contentAlignment,
  primaryCtaCopy,
  secondaryCtaCopy,
  tag,
  legend,
  mediaBlockLabel,
  mediaBlockSubLabel,
  disclaimer,
}) => (
  <Hero flexDirection={{ base: 'column', lg: variant === 'left' ? 'row' : 'row-reverse' }}>
    <Hero.Image width="100%" src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
    <Hero.Content contentAlignment={contentAlignment} maxWidth={{ lg: '24.375rem', xl: '32.125rem' }}>
      <Hero.ContentContainer>
        <Hero.Tag>{tag}</Hero.Tag>
        <Hero.Overline>{legend}</Hero.Overline>
        <Hero.Title variant="textpairing-header-4XL">
          <Hero.Title.Label>{label}</Hero.Title.Label>
          <Hero.Title.SubLabel>{subLabel}</Hero.Title.SubLabel>
        </Hero.Title>
      </Hero.ContentContainer>
      <Hero.ContentContainer gap="1.5rem">
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.Title>
            <Hero.MediaBlock.Title.Label>{mediaBlockLabel}</Hero.MediaBlock.Title.Label>
            <Hero.MediaBlock.Title.SubLabel>{mediaBlockSubLabel}</Hero.MediaBlock.Title.SubLabel>
          </Hero.MediaBlock.Title>
        </Hero.MediaBlock>
      </Hero.ContentContainer>
      <Hero.ContentContainer>
        <Hero.Actions>
          <Hero.Action children={primaryCtaCopy} variant="primary" />
          <Hero.Action children={secondaryCtaCopy} variant="primary-alt" />
        </Hero.Actions>
        <Hero.Disclaimer>{disclaimer}</Hero.Disclaimer>
      </Hero.ContentContainer>
    </Hero.Content>
  </Hero>
);

export const Playground = Template.bind({});
Playground.args = {
  tag: 'Tag',
  legend: 'BREAKING NEWS',
  label: 'The next generation of care for women and families',
  subLabel: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
  contentAlignment: 'start',
  variant: 'right',
  primaryCtaCopy: 'Default',
  secondaryCtaCopy: 'Default',
  mediaBlockLabel: 'MediaBlock label',
  mediaBlockSubLabel: 'MediaBlock sublabel',
  disclaimer: '*By clicking on Launch Mission you accept our space laws and rules for traveling through the universe.',
};
