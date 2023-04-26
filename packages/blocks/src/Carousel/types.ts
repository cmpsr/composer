import { FC } from 'react';
import { Carousel, FlexProps } from '@cmpsr/components';

import { MediaBlock } from '../MediaBlock';

export interface CarouselContentProps {}

export interface CarouselStaticMembers {
  // Image: typeof Image;
  // Content: FC<CarouselContentProps>;
  // ContentContainer: typeof Flex;
  // Disclaimer: typeof Text;
  // Title: typeof TextPairing;
  // Overline: typeof Text;
  // Action: typeof Link;
  // Actions: typeof Flex;
  Carousel: typeof Carousel;
  MediaBlock: typeof MediaBlock;
}

export type CarouselProps = FC<FlexProps> & CarouselStaticMembers;
