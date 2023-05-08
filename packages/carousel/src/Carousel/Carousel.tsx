import React, { Children, isValidElement, ReactNode } from 'react';
import { IconChevronLeft, IconChevronRight, Flex, IconButton } from '@cmpsr/components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import { CarouselProps, CarouselButtonProps, DotProps, DotGroupProps, NavigationContainerProps } from './types';

export const Carousel: CarouselProps = ({ children, showDots = true, showArrows = false, ...props }) => {
  const [totalSlides] = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Carousel.Slider) {
      return Children.count(child.props.children) as number;
    }
  });
  if (!totalSlides) return;

  const renderDots = (totalSlides: number) => {
    let carouselDots: ReactNode[] = [];
    for (let i = 0; i < totalSlides; i++) {
      carouselDots.push(<Carousel.Dot key={i} slide={i} />);
    }
    return carouselDots;
  };

  return (
    <CarouselProvider totalSlides={totalSlides} {...props}>
      <>
        {children}
        {(showDots || showArrows) && (
          <Carousel.NavigationContainer>
            {showArrows && <Carousel.ButtonBack />}
            {showDots && renderDots(totalSlides)}
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
    as={ButtonBack}
    icon={<IconChevronLeft {...carouselArrowStyles} />}
    {...carouselButtonStyles}
    {...props}
  />
);

const CarouselButtonNext: CarouselButtonProps = (props) => (
  <IconButton
    aria-label="next"
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

Carousel.Slider = Slider;
Carousel.Slide = Slide;
Carousel.ButtonBack = CarouselButtonBack;
Carousel.ButtonNext = CarouselButtonNext;
Carousel.DotGroup = CarouselDotGroup;
Carousel.Dot = CarouselDot;
Carousel.NavigationContainer = CarouselNavigationContainer;
