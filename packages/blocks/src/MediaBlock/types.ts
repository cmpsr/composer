import { FlexProps, Tag, CardProps, Link, Image, Text, TextPairing } from '@cmpsr/components';
import { FC } from 'react';

export const mediaBlockVariants = ['vertical', 'horizontal'] as const;
export type MediaBlockVariant = typeof mediaBlockVariants[number];

export interface MediaBlockProps extends FlexProps, CardProps {
  variant?: MediaBlockVariant;
  bounded?: boolean;
  alignItems?: 'start' | 'center' | 'end';
}

export interface MediaBlockStaticMembers {
  Image: typeof Image;
  Title: typeof TextPairing;
  Tag: typeof Tag;
  Action: typeof Link;
  Overline: typeof Text;
}

export type MediaBlockType = FC<MediaBlockProps> & MediaBlockStaticMembers;
