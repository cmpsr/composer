import { FC } from 'react';
import { FlexProps, LinkProps, TextPairingType, TextProps } from '@cmpsr/components';

export interface HighlightedTextProps extends FlexProps {
  contentAlignment?: 'start' | 'end' | 'center';
}

export interface HighlightedTextStaticMembers {
  TextPairing: TextPairingType;
  Legend: FC<TextProps>;
  Link: FC<LinkProps>;
  LinkGroup: FC<FlexProps>;
}

export type HighlightedTextType = FC<HighlightedTextProps> & HighlightedTextStaticMembers;
