import React, { Children, isValidElement, ReactNode, useState } from 'react';
import { IconChevronLeft, IconChevronRight, Flex, IconButton, Box, IconButtonProps } from '@cmpsr/components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import {
  CarouselProps,
  CarouselButtonProps,
  DotProps,
  DotGroupProps,
  NavigationContainerProps,
  SlideProps,
} from './types';

export const Carousel: CarouselProps = ({
  children,
  showDots = true,
  showArrows = false,
  visibleSlides = 1,
  arrowVariant = 'inline',
  ...props
}) => {
  const [totalSlides] = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Carousel.Slider) {
      return Children.count(child.props.children) as number;
    }
  });
  if (!totalSlides) return;
  const isFloatingArrowVariant = arrowVariant === 'floating';
  const [isCarouselHovered, setCarouselHovered] = useState(false);
  const showArrowsCriteria = showArrows && (arrowVariant === 'inline' || (isFloatingArrowVariant && isCarouselHovered));

  const handleMouseEnter = () => setCarouselHovered(true);

  const handleMouseLeave = () => setCarouselHovered(false);

  const renderDots = (totalSlides: number, visibleSlides: number) => {
    const carouselDots: ReactNode[] = [];
    const totalSlideGroups = Math.ceil(totalSlides / visibleSlides);

    for (let i = 0; i < totalSlideGroups; i++) {
      const slide = i * visibleSlides;
      carouselDots.push(<Carousel.Dot key={slide} slide={slide} />);
    }

    return carouselDots;
  };

  return (
    <Box
      as={CarouselProvider}
      position="relative"
      totalSlides={totalSlides}
      visibleSlides={visibleSlides}
      dragStep={visibleSlides}
      step={visibleSlides}
      {...(isFloatingArrowVariant && { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })}
      {...props}
    >
      <>
        {children}
        {(showDots || showArrows) && (
          <Carousel.NavigationContainer>
            {showArrowsCriteria && <CarouselButton arrowVariant={arrowVariant} direction="back" />}
            {showDots && renderDots(totalSlides, visibleSlides)}
            {showArrowsCriteria && <CarouselButton arrowVariant={arrowVariant} direction="next" />}
          </Carousel.NavigationContainer>
        )}
      </>
    </Box>
  );
};

const carouselButtonStyles = {
  inline: {
    width: '24px',
    height: '24px',
    backgroundColor: 'transparent',
    _disabled: { backgroundColor: 'transparent', cursor: 'not-allowed' },
    _hover: { svg: { color: 'text-link-primary-hover' } },
    _active: { svg: { color: 'text-link-primary-pressed' } },
    _focus: { backgroundColor: 'transparent', boxShadow: 'none' },
  },
  floating: {
    position: 'absolute',
    bottom: '5.875rem',
  } as IconButtonProps,
};

const carouselArrowStyles = {
  inline: {
    width: '100%',
    height: '100%',
    color: 'text-link-primary-default',
  },
  floating: { color: 'text-link-primary-default' },
};

const CarouselButton: CarouselButtonProps = ({ arrowVariant, direction, ...props }) => {
  const directionProps = {
    back: {
      'aria-label': 'back',
      as: ButtonBack,
      icon: <IconChevronLeft {...carouselArrowStyles[arrowVariant]} />,
    },
    next: {
      'aria-label': 'next',
      as: ButtonNext,
      icon: <IconChevronRight {...carouselArrowStyles[arrowVariant]} />,
    },
  };

  return (
    <IconButton
      {...directionProps[direction]}
      {...carouselButtonStyles[arrowVariant]}
      {...(arrowVariant === 'floating' && {
        variant: 'primary-alt',
        size: 'l',
        isRound: true,
        [direction === 'back' ? 'left' : 'right']: '1.5rem',
      })}
      {...props}
    />
  );
};

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
Carousel.ButtonBack = CarouselButton;
Carousel.ButtonNext = CarouselButton;
Carousel.DotGroup = CarouselDotGroup;
Carousel.Dot = CarouselDot;
Carousel.NavigationContainer = CarouselNavigationContainer;
