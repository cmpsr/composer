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
});
