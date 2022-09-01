import { FC } from 'react';
import { FlexProps, Image, Flex, TextPairing } from '@cmpsr/components';
export { FlexProps as BrandLogosProps } from '@cmpsr/components';

export interface BrandLogosStaticMembers {
  Image: typeof Image;
  ImageContainer: typeof Flex;
  Title: typeof TextPairing;
}

export type BrandLogosType = FC<FlexProps> & BrandLogosStaticMembers;
