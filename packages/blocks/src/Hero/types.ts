import { ImageProps, LinkProps, TextPairingVariant, Theme } from '@cmpsr/components';

export interface HeroProps {
  backgroundColor?: ThisType<Theme['colors']>;
  title: string;
  description: string;
  primaryCta?: LinkProps;
  secondaryCta?: LinkProps;
  imagePosition?: 'left' | 'right';
  imageProps?: ImageProps;
  textPairingVariant?: TextPairingVariant;
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}
