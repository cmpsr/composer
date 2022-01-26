import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Image } from './Image';

describe('Image', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Image
        src="https://avatars0.githubusercontent.com/u/67131017?s=200"
        alt="Composer Logo"
      />
    );

  test('should render an image', () => {
    givenComponentRendered();
    screen.getByAltText(/Composer Logo/i);
  });
});
