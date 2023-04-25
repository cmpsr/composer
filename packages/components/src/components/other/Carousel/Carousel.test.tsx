import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Carousel naturalSlideWidth={300} naturalSlideHeight={120} totalSlides={6}>
        <Carousel.Slider>
          <Carousel.Slide index={0}>Slide 1</Carousel.Slide>
          <Carousel.Slide index={1}>Slide 2</Carousel.Slide>
        </Carousel.Slider>
        <Carousel.DotGroup
          renderDots={() => (
            <>
              <Carousel.Dot slide={0} />
              <Carousel.Dot slide={1} />
            </>
          )}
        />
      </Carousel>
    );

  test('should render Carousel with slides', () => {
    givenComponentRendered();
    screen.getByText(/Slide 1/i);
  });
});
