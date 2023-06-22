import React, { FC } from 'react';
import { Avatar, AvatarProps, Flex, FlexProps, Text, TextPairing, TextPairingType, TextProps } from '@cmpsr/components';
import { QuoteAuthorStaticProps, QuoteStaticMembers } from './types';

export const Quote: FC<FlexProps> & QuoteStaticMembers = (props) => (
  <Flex flexDirection="column" gap="1.5rem" maxWidth="52.5rem" margin="0 auto" {...props} />
);

const QuoteText = (props: TextProps) => <Text variant="text-body-display-L" {...props} />;
Quote.Title = QuoteText;

const QuoteAuthorAvatar: FC<AvatarProps> = (props) => (
  <Avatar backgroundColor="primary-disabled" color="text-secondary" size="m" {...props} />
);

const QuoteAuthorName: TextPairingType = (props) => <TextPairing variant="textpairing-body-bold-meta" {...props} />;
QuoteAuthorName.Label = TextPairing.Label;
QuoteAuthorName.SubLabel = TextPairing.SubLabel;

const QuoteAuthor: FC<FlexProps> & QuoteAuthorStaticProps = (props) => <Flex gap="0.75rem" {...props} />;
QuoteAuthor.Avatar = QuoteAuthorAvatar;
QuoteAuthor.Name = QuoteAuthorName;

Quote.Author = QuoteAuthor;
