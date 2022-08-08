import { FlexProps, ImageProps, TextPairingType, LinkProps, Tag, CardProps } from '@cmpsr/components';
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
  Link: FC<LinkProps>;
}

export type MediaBlockType = FC<MediaBlockProps> & MediaBlockStaticMembers;
