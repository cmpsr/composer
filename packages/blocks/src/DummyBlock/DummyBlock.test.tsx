import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { DummyBlock } from './DummyBlock';

describe('DummyBlock', () => {
  const givenComponentRendered = () => renderWithProviders(<DummyBlock>Hello</DummyBlock>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });
});
