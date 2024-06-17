import React, { ReactNode } from 'react';
import { Meta } from '@storybook/react';
import { Box, ButtonIcon, Card, IconChevronLeft, IconChevronRight, TextPairing } from '@cmpsr/components';

import { Carousel } from './Carousel';

export default {
  component: Carousel,
  title: 'Carousel/Carousel',
} as Meta;

const renderDots = (totalSlides: number, visibleSlides: number) => {
  const carouselDots: ReactNode[] = [];
  const totalSlideGroups = Math.ceil(totalSlides / visibleSlides);

  for (let i = 0; i < totalSlideGroups; i++) {
    const slide = i * visibleSlides;
    carouselDots.push(<Carousel.Dot key={slide} slide={slide} />);
  }

  return carouselDots;
};

const Header = () => (
  <TextPairing variant="textpairing-header-2XL" mb="spacer-8">
    <TextPairing.Label>Rapid Solutions with Blocks</TextPairing.Label>
    <TextPairing.SubLabel>
      Our company provides rapid and high-quality solutions to your company problems. We leverage the best technology
      and expertise to deliver results fast.
    </TextPairing.SubLabel>
  </TextPairing>
);

const SlideCard = ({ index }) => (
  <Card outlined>
    <TextPairing>
      <TextPairing.Label>Testimonial {index + 1}</TextPairing.Label>
      <TextPairing.SubLabel>
        Working with this company has been a game-changer for our business. Their solutions are fast and effective, and
        they always exceed our expectations.
      </TextPairing.SubLabel>
    </TextPairing>
  </Card>
);

const Template = ({ totalSlides, visibleSlides }) => (
  <>
    <Header />
    <Carousel visibleSlides={visibleSlides} naturalSlideWidth={1} naturalSlideHeight={1} isIntrinsicHeight>
      <Carousel.Slider>
        {Array(totalSlides)
          .fill(0)
          .map((_, index) => (
            <Carousel.Slide index={index} key={index}>
              <SlideCard index={index} />
            </Carousel.Slide>
          ))}
      </Carousel.Slider>
      <Carousel.NavigationContainer>{renderDots(totalSlides, visibleSlides)}</Carousel.NavigationContainer>
    </Carousel>
  </>
);

const InlineNavigationTemplate = ({ totalSlides, visibleSlides }) => (
  <>
    <Header />
    <Carousel visibleSlides={visibleSlides} naturalSlideWidth={1} naturalSlideHeight={1} isIntrinsicHeight>
      <Carousel.Slider>
        {Array(totalSlides)
          .fill(0)
          .map((_, index) => (
            <Carousel.Slide index={index} key={index}>
              <SlideCard index={index} />
            </Carousel.Slide>
          ))}
      </Carousel.Slider>
      <Carousel.NavigationContainer>
        <Carousel.ButtonBack>
          <Box _hover={{ svg: { color: 'primary-hover' } }} _active={{ svg: { color: 'primary-pressed' } }}>
            <IconChevronLeft color="primary-default" size="l" />
          </Box>
        </Carousel.ButtonBack>
        {renderDots(totalSlides, visibleSlides)}
        <Carousel.ButtonNext>
          <Box _hover={{ svg: { color: 'primary-hover' } }} _active={{ svg: { color: 'primary-pressed' } }}>
            <IconChevronRight color="primary-default" size="l" />
          </Box>
        </Carousel.ButtonNext>
      </Carousel.NavigationContainer>
    </Carousel>
  </>
);

const FloatingNavigationTemplate = ({ totalSlides, visibleSlides }) => (
  <>
    <Header />
    <Carousel visibleSlides={visibleSlides} naturalSlideWidth={1} naturalSlideHeight={1} isIntrinsicHeight>
      <Carousel.Slider>
        {Array(totalSlides)
          .fill(0)
          .map((_, index) => (
            <Carousel.Slide index={index} key={index}>
              <SlideCard index={index} />
            </Carousel.Slide>
          ))}
      </Carousel.Slider>
      <Carousel.NavigationContainer>
        <Carousel.ButtonBack>
          <ButtonIcon
            position="absolute"
            bottom="5.875rem"
            left="1.5rem"
            variant="primary-alt"
            isRound
            size="l"
            aria-label="next"
            icon={<IconChevronLeft />}
          />
        </Carousel.ButtonBack>
        {renderDots(totalSlides, visibleSlides)}
        <Carousel.ButtonNext>
          <ButtonIcon
            position="absolute"
            bottom="5.875rem"
            right="1.5rem"
            variant="primary-alt"
            isRound
            size="l"
            aria-label="next"
            icon={<IconChevronRight />}
          />
        </Carousel.ButtonNext>
      </Carousel.NavigationContainer>
    </Carousel>
  </>
);

export const Playground = Template.bind({});
Playground.args = { visibleSlides: 2, totalSlides: 6 };

export const WithInlineNavigationButtons = InlineNavigationTemplate.bind({});
WithInlineNavigationButtons.args = { visibleSlides: 2, totalSlides: 6 };

export const WithFloatingNavigationButtons = FloatingNavigationTemplate.bind({});
WithFloatingNavigationButtons.args = { visibleSlides: 2, totalSlides: 6 };
