import React from 'react';
import { Meta } from '@storybook/react';
import { Card, Flex } from '../../';
import { Carousel } from './Carousel';
import { CarouselProps } from './types';

export default {
  component: Carousel,
  title: 'Components/Other/Carousel',
} as Meta;

const Template = (args: CarouselProps) => (
  <Carousel {...args}>
    <Carousel.Slider>
      <Flex gap="24px">
        <Carousel.Slide index={0}>
          <Card filled outlined>
            Slide 1
          </Card>
        </Carousel.Slide>
        <Carousel.Slide index={1}>
          <Card filled outlined>
            Slide 2
          </Card>
        </Carousel.Slide>
        <Carousel.Slide index={2}>
          <Card filled outlined>
            Slide 3
          </Card>
        </Carousel.Slide>
        <Carousel.Slide index={3}>
          <Card filled outlined>
            Slide 4
          </Card>
        </Carousel.Slide>
        <Carousel.Slide index={4}>
          <Card filled outlined>
            Slide 5
          </Card>
        </Carousel.Slide>
        <Carousel.Slide index={5}>
          <Card filled outlined>
            Slide 6
          </Card>
        </Carousel.Slide>
      </Flex>
    </Carousel.Slider>
    <Flex gap="12px" alignItems="center" justifyContent="center">
      <Carousel.ButtonBack />
      <Carousel.DotGroup
        renderDots={() => (
          <>
            <Carousel.Dot slide={0} />
            <Carousel.Dot slide={1} />
            <Carousel.Dot slide={2} />
            <Carousel.Dot slide={3} />
            <Carousel.Dot slide={4} />
            <Carousel.Dot slide={5} />
          </>
        )}
      />
      <Carousel.ButtonNext aria-label="next" />
    </Flex>
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {
  visibleSlides: 2,
  naturalSlideWidth: 300,
  naturalSlideHeight: 120,
  totalSlides: 6,
  step: 1,
};
