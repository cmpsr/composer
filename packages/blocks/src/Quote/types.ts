import { FC } from 'react';
import { AvatarProps, FlexProps, TextPairingType, TextProps } from '@cmpsr/components';
export { FlexProps as QuoteProps } from '@cmpsr/components';

export interface QuoteAuthorStaticProps {
  Avatar: FC<AvatarProps>;
  Name: TextPairingType;
}

export interface QuoteStaticMembers {
  Text: FC<TextProps>;
  Author: FC<FlexProps> & QuoteAuthorStaticProps;
}
