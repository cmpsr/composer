import React, { FC } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useStyleConfig } from '@chakra-ui/system';
import { IconChevronLeft, IconChevronRight, Flex, IconButton } from '@components';
import {
  CarouselProps,
  CarouselStaticMembers,
  ButtonBackProps,
  ButtonNextProps,
  DotProps,
  DotGroupProps,
  CarouselStyles,
} from './types';

export const Carousel: FC<CarouselProps> & CarouselStaticMembers = (props) => <CarouselProvider {...props} />;

const CarouselButtonBack: ButtonBackProps = (props) => {
  const { buttonStyles, chevronStyles } = useStyleConfig('Carousel') as CarouselStyles;
  return <IconButton as={ButtonBack} icon={<IconChevronLeft {...chevronStyles} />} {...buttonStyles} {...props} />;
};

const CarouselButtonNext: ButtonNextProps = (props) => {
  const { buttonStyles, chevronStyles } = useStyleConfig('Carousel') as CarouselStyles;
  return <IconButton as={ButtonNext} icon={<IconChevronRight {...chevronStyles} />} {...buttonStyles} {...props} />;
};

const CarouselDot: DotProps = (props) => {
  const { dotStyles } = useStyleConfig('Carousel') as CarouselStyles;
  return <Flex as={Dot} {...dotStyles} {...props} />;
};

const CarouselDotGroup: DotGroupProps = (props) => <Flex as={DotGroup} gap="12px" disableActiveDots {...props} />;

Carousel.Slider = Slider;
Carousel.Slide = Slide;
Carousel.ButtonBack = CarouselButtonBack;
Carousel.ButtonNext = CarouselButtonNext;
Carousel.DotGroup = CarouselDotGroup;
Carousel.Dot = CarouselDot;
