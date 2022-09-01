import { FlexProps, ImageProps, TextPairingType, Tag, CardProps, Link } from '@cmpsr/components';
import { FC } from 'react';

export const mediaBlockVariants = ['vertical', 'horizontal'] as const;
export type MediaBlockVariant = typeof mediaBlockVariants[number];

export interface MediaBlockProps extends FlexProps, CardProps {
  variant?: MediaBlockVariant;
  bounded?: boolean;
  alignItems?: 'start' | 'center' | 'end';
}

export interface MediaBlockStaticMembers {
  Image: FC<ImageProps>;
  TextPairing: TextPairingType;
  Tag: typeof Tag;
  Link: typeof Link;
}

export type MediaBlockType = FC<MediaBlockProps> & MediaBlockStaticMembers;
