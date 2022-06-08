import { TextPairingVariant, TextVariant, Theme } from '@cmpsr/components';

export interface BrandLogosProps {
  backgroundColor?: ThisType<Theme['colors']>;
  title?: string;
  description?: string;
  logos: Array<string>;
  logosMaxHeight?: string;
  textVariant?: TextVariant | TextPairingVariant;
}
