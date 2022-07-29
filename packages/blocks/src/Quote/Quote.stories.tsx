import React from 'react';
import { Meta } from '@storybook/react';
import { Quote } from '.';
import { avatarSizes, textPairingVariants, textVariants } from '@cmpsr/components';

export default {
  component: Quote,
  title: 'Blocks/Quote',
  argTypes: {
    quoteVariant: {
      options: textVariants,
      control: { type: 'select' },
    },
    authorVariant: {
      options: textPairingVariants,
      control: { type: 'select' },
    },
    avatarSize: {
      options: avatarSizes,
      control: { type: 'select' },
    },
  },
} as Meta;

export const WithAuthor = () => (
  <Quote>
    <Quote.Text>
      &ldquo;We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
      three ways we could find it.&rdquo;
    </Quote.Text>
    <Quote.Author>
      <Quote.Author.Avatar name="John Doe" src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
      <Quote.Author.Name>
        <Quote.Author.Name.Label>John Doe</Quote.Author.Name.Label>
        <Quote.Author.Name.SubLabel>Composer Studio</Quote.Author.Name.SubLabel>
      </Quote.Author.Name>
    </Quote.Author>
  </Quote>
);

export const WithoutAuthor = () => (
  <Quote>
    <Quote.Text>
      &ldquo;We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are
      three ways we could find it.&rdquo;
    </Quote.Text>
  </Quote>
);

const Template = ({ quote, quoteVariant, author, association, authorVariant, avatarSize, avatarUrl }) => (
  <Quote>
    <Quote.Text variant={quoteVariant}>{quote}</Quote.Text>
    <Quote.Author>
      <Quote.Author.Avatar name={author} size={avatarSize} src={avatarUrl} />
      <Quote.Author.Name variant={authorVariant}>
        <Quote.Author.Name.Label>{author}</Quote.Author.Name.Label>
        <Quote.Author.Name.SubLabel>{association}</Quote.Author.Name.SubLabel>
      </Quote.Author.Name>
    </Quote.Author>
  </Quote>
);

export const Playground = Template.bind({});
Playground.args = {
  quote:
    '"We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."',
  quoteVariant: 'text-body-display-L',
  author: 'John Doe',
  association: 'Composer Studio',
  authorVariant: 'textpairing-body-bold-meta',
  avatarSize: 'm',
  avatarUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
};
