import React from 'react';
import { Meta } from '@storybook/react';
import { IconArrowRight } from '@cmpsr/components';

import { Carousel } from './Carousel';

export default {
  component: Carousel,
  title: 'Blocks/Carousel',
} as Meta;

const Template = ({ isIntrinsicHeight, naturalSlideWidth, naturalSlideHeight, withArrows }) => (
  <Carousel
    visibleSlides={2}
    naturalSlideWidth={naturalSlideWidth}
    naturalSlideHeight={naturalSlideHeight}
    isIntrinsicHeight={isIntrinsicHeight}
    totalSlides={6}
  >
    <Carousel.MediaBlock mb="spacer-8">
      <Carousel.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" maxWidth="2rem" />
      <Carousel.MediaBlock.Title variant="textpairing-body-display-M">
        <Carousel.MediaBlock.Title.Label>Rapid Solutions with Blocks</Carousel.MediaBlock.Title.Label>
        <Carousel.MediaBlock.Title.SubLabel>
          Our tech company provides rapid and high-quality solutions to your company problems. We leverage the best
          technology and expertise to deliver results fast.
        </Carousel.MediaBlock.Title.SubLabel>
      </Carousel.MediaBlock.Title>
    </Carousel.MediaBlock>
    <Carousel.Slider>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Carousel.Slide index={index} key={index}>
            <Carousel.MediaBlock bounded outlined mr="24px">
              <Carousel.MediaBlock.Image
                src="https://avatars0.githubusercontent.com/u/67131017?s=200"
                maxWidth="2rem"
              />
              <Carousel.MediaBlock.Title>
                <Carousel.MediaBlock.Title.Label>Testimonial {index}</Carousel.MediaBlock.Title.Label>
                <Carousel.MediaBlock.Title.SubLabel>
                  Working with this company has been a game-changer for our business. Their solutions are fast and
                  effective, and they always exceed our expectations.
                </Carousel.MediaBlock.Title.SubLabel>
              </Carousel.MediaBlock.Title>
              <Carousel.MediaBlock.Action trailingIcon={<IconArrowRight />}>Read more</Carousel.MediaBlock.Action>
            </Carousel.MediaBlock>
          </Carousel.Slide>
        ))}
    </Carousel.Slider>
    <Carousel.NavigationContainer>
      {withArrows && <Carousel.ButtonBack />}
      <Carousel.Dot slide={0} />
      <Carousel.Dot slide={1} />
      <Carousel.Dot slide={2} />
      <Carousel.Dot slide={3} />
      <Carousel.Dot slide={4} />
      <Carousel.Dot slide={5} />
      {withArrows && <Carousel.ButtonNext />}
    </Carousel.NavigationContainer>
  </Carousel>
);

export const Playground = Template.bind({});
Playground.args = { isIntrinsicHeight: true, naturalSlideWidth: 1, naturalSlideHeight: 1 };

export const WithArrows = Template.bind({});
WithArrows.args = { isIntrinsicHeight: true, naturalSlideWidth: 1, naturalSlideHeight: 1, withArrows: true };
