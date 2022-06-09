import { ImageProps, LinkProps, TextPairingProps, Theme } from '@cmpsr/components';

export interface HeroProps {
  backgroundColor?: ThisType<Theme['colors']>;
  primaryCta?: LinkProps;
  secondaryCta?: LinkProps;
  imagePosition?: 'left' | 'right';
  imageProps?: ImageProps;
  textPairingProps: TextPairingProps;
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}
