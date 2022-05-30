import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { DummyBlock } from './DummyBlock';

describe('DummyBlock', () => {
  const givenComponentRendered = () => renderWithProviders(<DummyBlock />);

  test('should render dummy block', () => {
    givenComponentRendered();
    screen.getByText(/DummyBlock/i);
  });
});
