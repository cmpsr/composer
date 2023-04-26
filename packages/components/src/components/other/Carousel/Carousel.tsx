import React, { FC } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import { useStyleConfig } from '@chakra-ui/system';
import { IconChevronLeft, IconChevronRight, Flex, IconButton } from '@components';
import {
  CarouselProps,
  CarouselStaticMembers,
  CarouselButtonProps,
  DotProps,
  DotGroupProps,
  CarouselStyles,
} from './types';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const Carousel: FC<CarouselProps> & CarouselStaticMembers = (props) => <CarouselProvider {...props} />;

const CarouselButtonBack: CarouselButtonProps = (props) => {
  const { buttonStyles, chevronStyles } = useStyleConfig('Carousel') as CarouselStyles;
  return (
    <IconButton
      aria-label="back"
      as={ButtonBack}
      icon={<IconChevronLeft {...chevronStyles} />}
      {...buttonStyles}
      {...props}
    />
  );
};

const CarouselButtonNext: CarouselButtonProps = (props) => {
  const { buttonStyles, chevronStyles } = useStyleConfig('Carousel') as CarouselStyles;
  return (
    <IconButton
      aria-label="next"
      as={ButtonNext}
      icon={<IconChevronRight {...chevronStyles} />}
      {...buttonStyles}
      {...props}
    />
  );
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
