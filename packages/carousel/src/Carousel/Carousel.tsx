import React, { Children, isValidElement, ReactNode } from 'react';
import { IconChevronLeft, IconChevronRight, Flex, IconButton } from '@cmpsr/components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import {
  CarouselProps,
  CarouselButtonProps,
  DotProps,
  DotGroupProps,
  NavigationContainerProps,
  SlideProps,
} from './types';

export const Carousel: CarouselProps = ({ children, showDots = true, showArrows = false, visibleSlides, ...props }) => {
  const [totalSlides] = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Carousel.Slider) {
      return Children.count(child.props.children) as number;
    }
  });
  if (!totalSlides) return;

  const renderDots = (totalSlides: number, visibleSlides: number) => {
    const carouselDots: ReactNode[] = [];
    const totalSlideGroups = Math.ceil(totalSlides / visibleSlides);

    for (let i = 0; i < totalSlideGroups; i++) {
      const slide = i * visibleSlides;
      carouselDots.push(<Carousel.Dot key={slide} slide={slide} data-test-slide={slide} data-testid="carousel-dot" />);
    }

    return carouselDots;
  };

  return (
    <CarouselProvider totalSlides={totalSlides} visibleSlides={visibleSlides} {...props}>
      <>
        {children}
        {(showDots || showArrows) && (
          <Carousel.NavigationContainer>
            {showArrows && <Carousel.ButtonBack />}
            {showDots && renderDots(totalSlides, visibleSlides)}
            {showArrows && <Carousel.ButtonNext />}
          </Carousel.NavigationContainer>
        )}
      </>
    </CarouselProvider>
  );
};

const carouselButtonStyles = {
  width: '24px',
  height: '24px',
  backgroundColor: 'transparent',
  _disabled: { backgroundColor: 'transparent' },
  _hover: { svg: { color: 'text-link-primary-hover' } },
  _active: { svg: { color: 'text-link-primary-pressed' } },
  _focus: { backgroundColor: 'transparent', boxShadow: 'none' },
};

const carouselArrowStyles = {
  width: '100%',
  height: '100%',
  color: 'text-link-primary-default',
};

const CarouselButtonBack: CarouselButtonProps = (props) => (
  <IconButton
    aria-label="back"
    data-testid="carousel-button-back"
    as={ButtonBack}
    icon={<IconChevronLeft {...carouselArrowStyles} />}
    {...carouselButtonStyles}
    {...props}
  />
);

const CarouselButtonNext: CarouselButtonProps = (props) => (
  <IconButton
    aria-label="next"
    data-testid="carousel-button-next"
    as={ButtonNext}
    icon={<IconChevronRight {...carouselArrowStyles} />}
    {...carouselButtonStyles}
    {...props}
  />
);

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
