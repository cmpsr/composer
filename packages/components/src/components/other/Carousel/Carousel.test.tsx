import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  const givenComponentRendered = () => renderWithProviders(<Carousel>Children</Carousel>);

  test('should render a children', () => {
    givenComponentRendered();
    screen.getByText(/Children/i);
  });
});
