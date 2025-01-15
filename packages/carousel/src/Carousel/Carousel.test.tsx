import React from 'react';
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
      </Carousel>,
    );
    screen.getByText('Label');
  });
  test('should not render Carousel when children is not Carousel Slider', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1}>
        <span>foo</span>
      </Carousel>,
    );
    expect(screen.queryByText('foo')).not.toBeInTheDocument();
  });

  test('should render Carousel with dots', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1}>
        <Carousel.Slider>
          <Carousel.Slide index={0}>
            <Text>Label</Text>
          </Carousel.Slide>
        </Carousel.Slider>
        <Carousel.NavigationContainer>
          <Carousel.Dot key={0} slide={0} />
        </Carousel.NavigationContainer>
      </Carousel>,
    );

    expect(screen.queryAllByRole('button', { name: 'slide dot' }).length).toBe(1);
  });

  test('should render Carousel with arrows', () => {
    renderWithProviders(
      <Carousel visibleSlides={1} naturalSlideWidth={1} naturalSlideHeight={1}>
        <Carousel.Slider>
          <Carousel.Slide index={0}>
            <Text>Label</Text>
          </Carousel.Slide>
          <Carousel.Slide index={1}>
            <Text>Label 1</Text>
          </Carousel.Slide>
        </Carousel.Slider>
        <Carousel.NavigationContainer>
          <Carousel.ButtonBack>
            <Text>back</Text>
          </Carousel.ButtonBack>
          <Carousel.ButtonNext>
            <Text>next</Text>
          </Carousel.ButtonNext>
        </Carousel.NavigationContainer>
      </Carousel>,
    );

    expect(screen.getByLabelText('back')).toBeInTheDocument();
    expect(screen.getByLabelText('next')).toBeInTheDocument();
  });
});
