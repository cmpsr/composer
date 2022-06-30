import { FC } from 'react';
import {
  FlexProps,
  ImageProps,
  LinkProps,
  TagProps,
  TextPairingProps,
  TextProps,
  TextPairingStaticMembers,
} from '@cmpsr/components';
export { FlexProps as HeroProps } from '@cmpsr/components';

import { MediaBlockProps, MediaBlockStaticMembers } from '../MediaBlock';

export interface HeroContentProps extends FlexProps {
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}

export interface HeroStaticMembers {
  Image: FC<ImageProps>;
  Content: FC<HeroContentProps>;
  ContentGroup: FC<FlexProps>;
  Disclaimer: FC<TextProps>;
  TextPairing: FC<TextPairingProps> & TextPairingStaticMembers;
  Legend: FC<TextProps>;
  Link: FC<LinkProps>;
  LinkGroup: FC<FlexProps>;
  MediaBlock: FC<MediaBlockProps> & MediaBlockStaticMembers;
  Tag: FC<TagProps>;
}
