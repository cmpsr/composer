import React from 'react';
import { Meta } from '@storybook/react';
import { IconChevronRight } from '@cmpsr/components';

import { HighlightedText } from './HighlightedText';

export default {
  component: HighlightedText,
  title: 'Blocks/HighlightedText',
  argTypes: {
    variant: {
      options: ['right', 'left'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Center = () => (
  <HighlightedText contentAlignment="center">
    <HighlightedText.Legend>BREAKING NEWS</HighlightedText.Legend>
    <HighlightedText.TextPairing variant="textpairing-header-4XL">
      <HighlightedText.TextPairing.Label>There is life elsewhere in the universe</HighlightedText.TextPairing.Label>
      <HighlightedText.TextPairing.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </HighlightedText.TextPairing.SubLabel>
    </HighlightedText.TextPairing>
    <HighlightedText.LinkGroup>
      <HighlightedText.Link variant="primary">Launch mission</HighlightedText.Link>
      <HighlightedText.Link variant="primary-alt">Learn more</HighlightedText.Link>
      <HighlightedText.Link variant="link" trailingIcon={<IconChevronRight />}>
        Find me a spaceship
      </HighlightedText.Link>
    </HighlightedText.LinkGroup>
  </HighlightedText>
);

export const End = () => (
  <HighlightedText contentAlignment="end">
    <HighlightedText.Legend>BREAKING NEWS</HighlightedText.Legend>
    <HighlightedText.TextPairing variant="textpairing-header-4XL">
      <HighlightedText.TextPairing.Label>There is life elsewhere in the universe</HighlightedText.TextPairing.Label>
      <HighlightedText.TextPairing.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </HighlightedText.TextPairing.SubLabel>
    </HighlightedText.TextPairing>
    <HighlightedText.LinkGroup>
      <HighlightedText.Link variant="primary">Launch mission</HighlightedText.Link>
      <HighlightedText.Link variant="primary-alt">Learn more</HighlightedText.Link>
      <HighlightedText.Link variant="link" trailingIcon={<IconChevronRight />} alignSelf={{ base: 'end', md: 'unset' }}>
        Find me a spaceship
      </HighlightedText.Link>
    </HighlightedText.LinkGroup>
  </HighlightedText>
);

export const Start = () => (
  <HighlightedText contentAlignment="start">
    <HighlightedText.Legend>BREAKING NEWS</HighlightedText.Legend>
    <HighlightedText.TextPairing variant="textpairing-header-4XL">
      <HighlightedText.TextPairing.Label>There is life elsewhere in the universe</HighlightedText.TextPairing.Label>
      <HighlightedText.TextPairing.SubLabel color="text-secondary">
        We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
        three ways we could find it.
      </HighlightedText.TextPairing.SubLabel>
    </HighlightedText.TextPairing>
    <HighlightedText.LinkGroup>
      <HighlightedText.Link variant="primary">Launch mission</HighlightedText.Link>
      <HighlightedText.Link variant="primary-alt">Learn more</HighlightedText.Link>
      <HighlightedText.Link
        variant="link"
        trailingIcon={<IconChevronRight />}
        alignSelf={{ base: 'start', md: 'unset' }}
      >
        Find me a spaceship
      </HighlightedText.Link>
    </HighlightedText.LinkGroup>
  </HighlightedText>
);

const Template = ({ legend, label, subLabel, contentAlignment }) => (
  <HighlightedText contentAlignment={contentAlignment}>
    <HighlightedText.Legend>{legend}</HighlightedText.Legend>
    <HighlightedText.TextPairing variant="textpairing-header-4XL">
      <HighlightedText.TextPairing.Label>{label}</HighlightedText.TextPairing.Label>
      <HighlightedText.TextPairing.SubLabel color="text-secondary">{subLabel}</HighlightedText.TextPairing.SubLabel>
    </HighlightedText.TextPairing>
    <HighlightedText.LinkGroup>
      <HighlightedText.Link variant="primary">Launch mission</HighlightedText.Link>
      <HighlightedText.Link variant="primary-alt">Learn more</HighlightedText.Link>
      <HighlightedText.Link
        variant="link"
        trailingIcon={<IconChevronRight />}
        alignSelf={{ base: contentAlignment, md: 'unset' }}
      >
        Find me a spaceship
      </HighlightedText.Link>
    </HighlightedText.LinkGroup>
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
