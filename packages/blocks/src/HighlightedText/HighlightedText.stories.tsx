import React from 'react';
import { Meta } from '@storybook/react';
import { IconChevronRight } from '@cmpsr/components';

import { HighlightedText } from './HighlightedText';

export default {
  component: HighlightedText,
  title: 'Blocks/HighlightedText',
  argTypes: {
    contentAlignment: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Center = () => (
  <HighlightedText contentAlignment="center">
    <HighlightedText.Overline>BREAKING NEWS</HighlightedText.Overline>
    <HighlightedText.Title variant="textpairing-header-4XL">
      <HighlightedText.Title.Label>There is life elsewhere in the universe</HighlightedText.Title.Label>
      <HighlightedText.Title.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </HighlightedText.Title.SubLabel>
    </HighlightedText.Title>
    <HighlightedText.Actions>
      <HighlightedText.Action variant="primary">Launch mission</HighlightedText.Action>
      <HighlightedText.Action variant="primary-alt">Learn more</HighlightedText.Action>
      <HighlightedText.Action variant="link" trailingIcon={<IconChevronRight />}>
        Find me a spaceship
      </HighlightedText.Action>
    </HighlightedText.Actions>
  </HighlightedText>
);

export const End = () => (
  <HighlightedText contentAlignment="end">
    <HighlightedText.Overline>BREAKING NEWS</HighlightedText.Overline>
    <HighlightedText.Title variant="textpairing-header-4XL">
      <HighlightedText.Title.Label>There is life elsewhere in the universe</HighlightedText.Title.Label>
      <HighlightedText.Title.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </HighlightedText.Title.SubLabel>
    </HighlightedText.Title>
    <HighlightedText.Actions>
      <HighlightedText.Action variant="primary">Launch mission</HighlightedText.Action>
      <HighlightedText.Action variant="primary-alt">Learn more</HighlightedText.Action>
      <HighlightedText.Action
        variant="link"
        trailingIcon={<IconChevronRight />}
        alignSelf={{ base: 'end', md: 'unset' }}
      >
        Find me a spaceship
      </HighlightedText.Action>
    </HighlightedText.Actions>
  </HighlightedText>
);

export const Start = () => (
  <HighlightedText contentAlignment="start">
    <HighlightedText.Overline>BREAKING NEWS</HighlightedText.Overline>
    <HighlightedText.Title variant="textpairing-header-4XL">
      <HighlightedText.Title.Label>There is life elsewhere in the universe</HighlightedText.Title.Label>
      <HighlightedText.Title.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </HighlightedText.Title.SubLabel>
    </HighlightedText.Title>
    <HighlightedText.Actions>
      <HighlightedText.Action variant="primary">Launch mission</HighlightedText.Action>
      <HighlightedText.Action variant="primary-alt">Learn more</HighlightedText.Action>
      <HighlightedText.Action
        variant="link"
        trailingIcon={<IconChevronRight />}
        alignSelf={{ base: 'start', md: 'unset' }}
      >
        Find me a spaceship
      </HighlightedText.Action>
    </HighlightedText.Actions>
  </HighlightedText>
);

const Template = ({ legend, label, subLabel, contentAlignment }) => (
  <HighlightedText contentAlignment={contentAlignment}>
    <HighlightedText.Overline>{legend}</HighlightedText.Overline>
    <HighlightedText.Title variant="textpairing-header-4XL">
      <HighlightedText.Title.Label>{label}</HighlightedText.Title.Label>
      <HighlightedText.Title.SubLabel color="text-secondary">{subLabel}</HighlightedText.Title.SubLabel>
    </HighlightedText.Title>
    <HighlightedText.Actions>
      <HighlightedText.Action variant="primary">Launch mission</HighlightedText.Action>
      <HighlightedText.Action variant="primary-alt">Learn more</HighlightedText.Action>
      <HighlightedText.Action
        variant="link"
        trailingIcon={<IconChevronRight />}
        alignSelf={{ base: contentAlignment, md: 'unset' }}
      >
        Find me a spaceship
      </HighlightedText.Action>
    </HighlightedText.Actions>
  </HighlightedText>
);

export const Playground = Template.bind({});
Playground.args = {
  legend: 'Breaking news',
  label: 'There is life elsewhere in the universe',
  subLabel:
    'We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.',
  contentAlignment: 'start',
};
