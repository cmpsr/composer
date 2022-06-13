import { TextPairingProps, TextProps, Theme } from '@cmpsr/components';

export interface BrandLogosProps {
  backgroundColor?: ThisType<Theme['colors']>;
  logos: Array<string>;
  logosMaxHeight?: string;
  textProps: TextPairingProps | TextProps;
}
