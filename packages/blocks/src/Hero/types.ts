import { ReactNode } from 'react';
import { ButtonVariant, ImageProps, TextPairingVariant, Theme } from '@cmpsr/components';

export interface HeroProps {
  backgroundColor?: ThisType<Theme['colors']>;
  title: string;
  description: string;
  primaryCta?: { copy: string; variant?: ButtonVariant; href: string };
  secondaryCta?: { copy: string; variant?: ButtonVariant; href: string };
  image: ReactNode;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  imageProps?: ImageProps;
  textPairingVariant?: TextPairingVariant;
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}
