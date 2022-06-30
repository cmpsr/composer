import { FC } from 'react';
import { ImageProps, FlexProps, TextProps, TextPairingType } from '@cmpsr/components';
export { FlexProps as BrandLogosProps } from '@cmpsr/components';

export interface BrandLogosStaticMembers {
  Image: FC<ImageProps>;
  ImagesContainer: FC<FlexProps>;
  Text: FC<TextProps>;
  TextPairing: TextPairingType;
}

export type BrandLogosType = FC<FlexProps> & BrandLogosStaticMembers;
