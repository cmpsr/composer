import React, { ReactNode } from 'react';
import { Meta } from '@storybook/react';
import { Box, Card, IconButton, IconChevronLeft, IconChevronRight, TextPairing } from '@cmpsr/components';

import { Carousel } from './Carousel';

export default {
  component: Carousel,
  title: 'Carousel/Carousel',
} as Meta;

const Template = ({ totalSlides, visibleSlides, showNavigationButtons, floating }) => {
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
    <>
      <TextPairing variant="textpairing-header-2XL" mb="spacer-8">
        <TextPairing.Label>Rapid Solutions with Blocks</TextPairing.Label>
        <TextPairing.SubLabel>
          Our company provides rapid and high-quality solutions to your company problems. We leverage the best
          technology and expertise to deliver results fast.
        </TextPairing.SubLabel>
      </TextPairing>
      <Carousel visibleSlides={visibleSlides} naturalSlideWidth={1} naturalSlideHeight={1} isIntrinsicHeight>
        <Carousel.Slider>
          {Array(totalSlides)
            .fill(0)
            .map((_, index) => (
              <Carousel.Slide index={index} key={index}>
                <Card outlined>
                  <TextPairing>
                    <TextPairing.Label>Testimonial {index + 1}</TextPairing.Label>
                    <TextPairing.SubLabel>
                      Working with this company has been a game-changer for our business. Their solutions are fast and
                      effective, and they always exceed our expectations.
                    </TextPairing.SubLabel>
                  </TextPairing>
                </Card>
              </Carousel.Slide>
            ))}
        </Carousel.Slider>
        <Carousel.NavigationContainer>
          {showNavigationButtons && (
            <Carousel.ButtonBack>
              {floating ? (
                <IconButton
                  position="absolute"
                  bottom="5.875rem"
                  left="1.5rem"
                  variant="primary-alt"
                  isRound
                  size="l"
                  aria-label="next"
                  icon={<IconChevronLeft />}
                />
              ) : (
                <Box
                  _hover={{ svg: { color: 'text-link-primary-hover' } }}
                  _active={{ svg: { color: 'text-link-primary-pressed' } }}
                >
                  <IconChevronLeft color="text-link-primary-default" size="l" />
                </Box>
              )}
            </Carousel.ButtonBack>
          )}
          {renderDots(totalSlides, visibleSlides)}
          {showNavigationButtons && (
            <Carousel.ButtonNext>
              {floating ? (
                <IconButton
                  position="absolute"
                  bottom="5.875rem"
                  right="1.5rem"
                  variant="primary-alt"
                  isRound
                  size="l"
                  aria-label="next"
                  icon={<IconChevronRight />}
                />
              ) : (
                <Box
                  _hover={{ svg: { color: 'text-link-primary-hover' } }}
                  _active={{ svg: { color: 'text-link-primary-pressed' } }}
                >
                  <IconChevronRight color="text-link-primary-default" size="l" />
                </Box>
              )}
            </Carousel.ButtonNext>
          )}
        </Carousel.NavigationContainer>
      </Carousel>
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = { visibleSlides: 2, totalSlides: 6 };

export const WithInlineNavigationButtons = Template.bind({});
WithInlineNavigationButtons.args = { visibleSlides: 2, totalSlides: 6, showNavigationButtons: true };

export const WithFloatingNavigationButtons = Template.bind({});
WithFloatingNavigationButtons.args = { visibleSlides: 2, totalSlides: 6, showNavigationButtons: true, floating: true };
