import { FC } from 'react';
import { Flex, FlexProps, Link, Text, TextPairing } from '@cmpsr/components';

export interface HighlightedTextProps extends FlexProps {
  contentAlignment?: 'start' | 'end' | 'center';
}

export interface HighlightedTextStaticMembers {
  Title: typeof TextPairing;
  Overline: typeof Text;
  Action: typeof Link;
  Actions: typeof Flex;
}

export type HighlightedTextType = FC<HighlightedTextProps> & HighlightedTextStaticMembers;
