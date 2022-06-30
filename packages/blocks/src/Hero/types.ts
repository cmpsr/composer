import { FC } from 'react';
import { FlexProps, ImageProps, LinkProps, TagProps, TextPairingType, TextProps } from '@cmpsr/components';
export { FlexProps as HeroProps } from '@cmpsr/components';

import { MediaBlockType } from '../MediaBlock';

export interface HeroContentProps extends FlexProps {
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}

export interface HeroStaticMembers {
  Image: FC<ImageProps>;
  Content: FC<HeroContentProps>;
  ContentGroup: FC<FlexProps>;
  Disclaimer: FC<TextProps>;
  TextPairing: TextPairingType;
  Legend: FC<TextProps>;
  Link: FC<LinkProps>;
  LinkGroup: FC<FlexProps>;
  MediaBlock: MediaBlockType;
  Tag: FC<TagProps>;
}
