import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Flex } from './Flex';

describe('Flex', () => {
  const givenComponentRendered = () => renderWithProviders(<Flex>Children</Flex>);

  test('should render a children', () => {
    givenComponentRendered();
    screen.getByText(/Children/i);
  });
});
