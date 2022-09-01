import { FC } from 'react';
import { AvatarProps, FlexProps, Text, TextPairingType } from '@cmpsr/components';
export { FlexProps as QuoteProps } from '@cmpsr/components';

export interface QuoteAuthorStaticProps {
  Avatar: FC<AvatarProps>;
  Name: TextPairingType;
}

export interface QuoteStaticMembers {
  Title: typeof Text;
  Author: FC<FlexProps> & QuoteAuthorStaticProps;
}
