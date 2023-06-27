import React from 'react';
import userEvent from '@testing-library/user-event';
import { Text } from '@cmpsr/components';
import { screen, renderWithProviders } from '../tests/renderWithProviders';

import { Carousel } from './Carousel';

describe('Carousel', () => {
  test('should render childrens', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1}>
        <Carousel.Slider>
          <Carousel.Slide index={0}>
            <Text>Label</Text>
          </Carousel.Slide>
        </Carousel.Slider>
      </Carousel>
    );
    screen.getByText('Label');
  });
  test('should not render Carousel when children is not Carousel Slider', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1}>
        <span>foo</span>
      </Carousel>
    );
    expect(screen.queryByText('foo')).not.toBeInTheDocument();
  });

  test('should render Carousel with dots', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1} showDots>
        <Carousel.Slider>
          <Carousel.Slide index={0}>
            <Text>Label</Text>
          </Carousel.Slide>
        </Carousel.Slider>
      </Carousel>
    );

    expect(screen.queryAllByTestId('carousel-dot').length).toBe(1);
  });

  test('should render Carousel with arrows', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1} showArrows>
        <Carousel.Slider>
          <Carousel.Slide index={0}>
            <Text>Label</Text>
          </Carousel.Slide>
          <Carousel.Slide index={1}>
            <Text>Label 1</Text>
          </Carousel.Slide>
        </Carousel.Slider>
      </Carousel>
    );

    expect(screen.getByTestId('carousel-button-back')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-button-next')).toBeInTheDocument();
  });

  test('should render Carousel with arrows and dots', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1} showArrows showDots>
        <Carousel.Slider>
          <Carousel.Slide index={0}>
            <Text>Label</Text>
          </Carousel.Slide>
          <Carousel.Slide index={1}>
            <Text>Label</Text>
          </Carousel.Slide>
        </Carousel.Slider>
      </Carousel>
    );

    expect(screen.queryAllByTestId('carousel-dot').length).toBe(2);
    expect(screen.getByTestId('carousel-button-back')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-button-next')).toBeInTheDocument();
  });

  test('should group Carousel dots', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Carousel visibleSlides={4} naturalSlideWidth={1} naturalSlideHeight={1} showDots>
        <Carousel.Slider data-testid="carousel-slider">
          {new Array(13).fill(null).map((_, index) => (
            <Carousel.Slide key={index} index={index}>
              <Text>Slide {index + 1}</Text>
            </Carousel.Slide>
          ))}
        </Carousel.Slider>
      </Carousel>
    );

    expect(screen.queryAllByTestId('carousel-dot').length).toBe(4);

    await user.click(screen.queryAllByTestId('carousel-dot')[0]);
    expect(screen.getByText('Slide 1')).toBeVisible();

    await user.click(screen.queryAllByTestId('carousel-dot')[1]);
    expect(screen.getByText('Slide 4')).toBeVisible();

    await user.click(screen.queryAllByTestId('carousel-dot')[2]);
    expect(screen.getByText('Slide 8')).toBeVisible();

    await user.click(screen.queryAllByTestId('carousel-dot')[3]);
    expect(screen.getByText('Slide 13')).toBeVisible();
  });
});
