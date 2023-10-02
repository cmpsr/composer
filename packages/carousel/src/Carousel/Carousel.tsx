import React, { Children, ReactElement, cloneElement, isValidElement } from 'react';
import { Flex, Box } from '@cmpsr/components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import {
  CarouselProps,
  CarouselButtonProps,
  DotProps,
  DotGroupProps,
  NavigationContainerProps,
  SlideProps,
} from './types';

export const Carousel: CarouselProps = ({ children, visibleSlides = 1, ...props }) => {
  const [totalSlides] = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Carousel.Slider) {
      return Children.count(child.props.children) as number;
    }
  });
  if (!totalSlides) return;

  return (
    <Box
      as={CarouselProvider}
      position="relative"
      totalSlides={totalSlides}
      visibleSlides={visibleSlides}
      dragStep={visibleSlides}
      step={visibleSlides}
      {...props}
    >
      {children}
    </Box>
  );
};

const CarouselButtonBack: CarouselButtonProps = ({ children, ...props }) =>
  isValidElement(children) &&
  cloneElement(children as ReactElement, { as: ButtonBack, 'aria-label': 'back', ...props });

const CarouselButtonNext: CarouselButtonProps = ({ children, ...props }) =>
  isValidElement(children) &&
  cloneElement(children as ReactElement, { as: ButtonNext, 'aria-label': 'next', ...props });

const CarouselDot: DotProps = (props) => (
  <Flex
    as={Dot}
    width="12px"
    height="12px"
    borderRadius="50%"
    background="primary-disabled"
    _disabled={{ background: 'primary-default' }}
    {...props}
  />
);

const CarouselDotGroup: DotGroupProps = (props) => <Flex as={DotGroup} gap="12px" disableActiveDots {...props} />;

const CarouselNavigationContainer: NavigationContainerProps = (props) => (
  <Flex alignItems="center" justifyContent="center" gap="12px" mt="spacer-16" {...props} />
);

const CarouselSlide: SlideProps = (props) => (
  <Flex _last={{ marginRight: '0px' }} marginRight="24px" as={Slide} {...props} />
);

Carousel.Slider = Slider;
Carousel.Slide = CarouselSlide;
Carousel.ButtonBack = CarouselButtonBack;
Carousel.ButtonNext = CarouselButtonNext;
Carousel.DotGroup = CarouselDotGroup;
Carousel.Dot = CarouselDot;
Carousel.NavigationContainer = CarouselNavigationContainer;
