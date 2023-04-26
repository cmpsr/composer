import React from 'react';
import { Meta } from '@storybook/react';

import { CarouselContainer } from './Carousel';

export default {
  component: CarouselContainer,
  title: 'Blocks/Carousel',
} as Meta;

const Template = () => (
  <CarouselContainer>
    <CarouselContainer.Carousel visibleSlides={1} naturalSlideWidth={100} naturalSlideHeight={500} totalSlides={2}>
      <CarouselContainer.Carousel.Slider>
        <CarouselContainer.Carousel.Slide index={0}>
          <CarouselContainer.MediaBlock>
            <CarouselContainer.MediaBlock.Image
              src="https://avatars0.githubusercontent.com/u/67131017?s=200"
              maxWidth="2rem"
            />
            <CarouselContainer.MediaBlock.Title>
              <CarouselContainer.MediaBlock.Title.Label>Slide 1</CarouselContainer.MediaBlock.Title.Label>
              <CarouselContainer.MediaBlock.Title.SubLabel>1</CarouselContainer.MediaBlock.Title.SubLabel>
            </CarouselContainer.MediaBlock.Title>
          </CarouselContainer.MediaBlock>
        </CarouselContainer.Carousel.Slide>
        <CarouselContainer.Carousel.Slide index={1}>
          <CarouselContainer.MediaBlock>
            <CarouselContainer.MediaBlock.Image
              src="https://avatars0.githubusercontent.com/u/67131017?s=200"
              maxWidth="2rem"
            />
            <CarouselContainer.MediaBlock.Title>
              <CarouselContainer.MediaBlock.Title.Label>Slide 2</CarouselContainer.MediaBlock.Title.Label>
              <CarouselContainer.MediaBlock.Title.SubLabel>2</CarouselContainer.MediaBlock.Title.SubLabel>
            </CarouselContainer.MediaBlock.Title>
          </CarouselContainer.MediaBlock>
        </CarouselContainer.Carousel.Slide>
      </CarouselContainer.Carousel.Slider>
      <CarouselContainer.Carousel.ButtonBack />
      <CarouselContainer.Carousel.ButtonNext />
    </CarouselContainer.Carousel>
  </CarouselContainer>
);

export const Playground = Template.bind({});
Playground.args = {};
