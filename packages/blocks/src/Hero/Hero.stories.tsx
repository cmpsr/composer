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

export const All = () => (
  <Hero>
    <Hero.Content>
      <Hero.ContentGroup>
        <Hero.Tag>Hello</Hero.Tag>
        <Hero.Legend>Breaking news</Hero.Legend>
        <Hero.TextPairing
          labelProps={{ children: 'There is life elsewhere in the universe' }}
          subLabelProps={{
            color: 'text-secondary',
            children:
              'We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.',
          }}
          variant="textpairing-header-4XL"
        />
      </Hero.ContentGroup>
      <Hero.ContentGroup gap="1.5rem">
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.TextPairing labelProps={{ children: 'Label' }} subLabelProps={{ children: 'SubLabel' }} />
        </Hero.MediaBlock>
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.TextPairing labelProps={{ children: 'Label' }} subLabelProps={{ children: 'SubLabel' }} />
        </Hero.MediaBlock>
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.TextPairing labelProps={{ children: 'Label' }} subLabelProps={{ children: 'SubLabel' }} />
        </Hero.MediaBlock>
      </Hero.ContentGroup>
      <Hero.ContentGroup>
        <Hero.LinkGroup alignItems={{ base: 'center', md: 'start' }}>
          <Hero.Link children="Default" variant="primary" />
          <Hero.Link children="Default" variant="primary-alt" />
        </Hero.LinkGroup>
        <Hero.Disclaimer>
          *By clicking on Launch Mission you accept our space laws and rules for traveling through the universe.
        </Hero.Disclaimer>
        <Hero.Link size="s" children="I need help >" />
      </Hero.ContentGroup>
      <Hero.ContentGroup flexDirection="row">
        <Hero.Link size="l" leadingIcon={<IconMail />} />
        <Hero.Link size="l" leadingIcon={<IconMail />} />
        <Hero.Link size="l" leadingIcon={<IconMail />} />
        <Hero.Link size="l" leadingIcon={<IconMail />} />
      </Hero.ContentGroup>
    </Hero.Content>
    <Hero.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
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
    <Hero.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="20rem" />
    <Hero.Content contentAlignment={contentAlignment}>
      <Hero.ContentGroup>
        <Hero.Tag>{tag}</Hero.Tag>
        <Hero.Legend>{legend}</Hero.Legend>
        <Hero.TextPairing
          labelProps={{ children: label }}
          subLabelProps={{
            children: subLabel,
          }}
          variant="textpairing-header-4XL"
        />
      </Hero.ContentGroup>
      <Hero.ContentGroup gap="1.5rem">
        <Hero.MediaBlock>
          <Hero.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
          <Hero.MediaBlock.TextPairing
            labelProps={{ children: mediaBlockLabel }}
            subLabelProps={{ children: mediaBlockSubLabel }}
          />
        </Hero.MediaBlock>
      </Hero.ContentGroup>
      <Hero.ContentGroup>
        <Hero.LinkGroup>
          <Hero.Link children={primaryCtaCopy} variant="primary" />
          <Hero.Link children={secondaryCtaCopy} variant="primary-alt" />
        </Hero.LinkGroup>
        <Hero.Disclaimer>{disclaimer}</Hero.Disclaimer>
      </Hero.ContentGroup>
    </Hero.Content>
  </Hero>
);

export const Playground = Template.bind({});
Playground.args = {
  tag: 'Tag',
  legend: 'Breaking news',
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
