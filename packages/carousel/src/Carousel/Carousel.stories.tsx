import React from 'react';
import { Meta } from '@storybook/react';
import { Card, TextPairing } from '@cmpsr/components';

import { Carousel } from './Carousel';

export default {
  component: Carousel,
  title: 'Carousel/Carousel',
} as Meta;

const Template = ({ totalSlides, visibleSlides, step, withArrows }) => (
  <Carousel
    visibleSlides={visibleSlides}
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    isIntrinsicHeight
    totalSlides={totalSlides}
    step={step}
  >
    <TextPairing variant="textpairing-header-2XL" mb="spacer-8">
      <TextPairing.Label>Rapid Solutions with Blocks</TextPairing.Label>
      <TextPairing.SubLabel>
        Our company provides rapid and high-quality solutions to your company problems. We leverage the best technology
        and expertise to deliver results fast.
      </TextPairing.SubLabel>
    </TextPairing>
    <Carousel.Slider>
      {Array(totalSlides)
        .fill(0)
        .map((_, index) => (
          <Carousel.Slide index={index} key={index}>
            <Card outlined mr="24px">
              <TextPairing>
                <TextPairing.Label>Testimonial {index}</TextPairing.Label>
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
      {withArrows && <Carousel.ButtonBack />}
      {Array(totalSlides)
        .fill(0)
        .map((_, index) => (
          <Carousel.Dot slide={index} key={index} />
        ))}
      {withArrows && <Carousel.ButtonNext />}
    </Carousel.NavigationContainer>
  </Carousel>
);

export const Playground = Template.bind({});
Playground.args = { visibleSlides: 2, totalSlides: 6, step: 2, withArrows: false };

export const WithArrows = Template.bind({});
WithArrows.args = { visibleSlides: 2, totalSlides: 6, step: 2, withArrows: true };