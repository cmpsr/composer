import React from 'react';
import { Carousel as BaseCarousel, Flex } from '@cmpsr/components';

import { MediaBlock, MediaBlockType } from '../MediaBlock';
import { CarouselProps } from './types';

export const CarouselContainer: any = (props) => (
  <Flex
    // backgroundColor={props.backgroundColor ?? 'background-page'}
    // flexDirection={{ base: 'column', lg: 'row' }}
    // gap={{ lg: '2.75rem' }}
    // alignItems="center"
    // justifyContent="center"
    {...props}
  />
);

const CarouselMediaBlock: MediaBlockType = (props) => <MediaBlock {...props} />;
CarouselMediaBlock.Image = MediaBlock.Image;
CarouselMediaBlock.Title = MediaBlock.Title;
CarouselMediaBlock.Tag = MediaBlock.Tag;
CarouselMediaBlock.Action = MediaBlock.Action;
CarouselMediaBlock.Overline = MediaBlock.Overline;
CarouselContainer.MediaBlock = CarouselMediaBlock;

const FooCarousel: any = (props) => <BaseCarousel {...props} />;
FooCarousel.Slider = BaseCarousel.Slider;
FooCarousel.Slide = BaseCarousel.Slide;
FooCarousel.ButtonBack = BaseCarousel.ButtonBack;
FooCarousel.ButtonNext = BaseCarousel.ButtonNext;
FooCarousel.DotGroup = BaseCarousel.DotGroup;
FooCarousel.Dot = BaseCarousel.Dot;
CarouselContainer.Carousel = FooCarousel;
