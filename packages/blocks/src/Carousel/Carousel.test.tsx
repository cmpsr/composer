import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';

import { Carousel } from './Carousel';

describe('Carousel', () => {
  test('should render childrens', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1} totalSlides={1}>
        <Carousel.Slider>
          <Carousel.Slide index={0}>
            <Carousel.MediaBlock>
              <Carousel.MediaBlock.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
              <Carousel.MediaBlock.Title>
                <Carousel.MediaBlock.Title.Label>Label</Carousel.MediaBlock.Title.Label>
                <Carousel.MediaBlock.Title.SubLabel>SubLabel</Carousel.MediaBlock.Title.SubLabel>
              </Carousel.MediaBlock.Title>
            </Carousel.MediaBlock>
          </Carousel.Slide>
        </Carousel.Slider>
        <Carousel.NavigationContainer>
          <Carousel.Dot slide={0} />
        </Carousel.NavigationContainer>
      </Carousel>
    );
    screen.getByText('Label');
    screen.getByText('SubLabel');
  });
});
