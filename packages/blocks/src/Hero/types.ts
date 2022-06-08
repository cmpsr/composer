import { ReactNode } from 'react';
import { ImageProps, LinkProps, TextPairingVariant, Theme } from '@cmpsr/components';

export interface HeroProps {
  backgroundColor?: ThisType<Theme['colors']>;
  title: string;
  description: string;
  primaryCta?: LinkProps;
  secondaryCta?: LinkProps;
  image: ReactNode;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  imageProps?: ImageProps;
  textPairingVariant?: TextPairingVariant;
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}
