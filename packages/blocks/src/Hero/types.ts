import { FC } from 'react';
import { Flex, FlexProps, Image, Link, TagProps, Text, TextPairing } from '@cmpsr/components';
export { FlexProps as HeroProps } from '@cmpsr/components';

import { MediaBlock } from '../MediaBlock';

export interface HeroContentProps extends FlexProps {
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}

export interface HeroStaticMembers {
  Image: typeof Image;
  Content: FC<HeroContentProps>;
  ContentContainer: typeof Flex;
  Disclaimer: typeof Text;
  Title: typeof TextPairing;
  Overline: typeof Text;
  Action: typeof Link;
  Actions: typeof Flex;
  MediaBlock: typeof MediaBlock;
  Tag: FC<TagProps>;
}

export type HeroType = FC<HeroContentProps> & HeroStaticMembers;
