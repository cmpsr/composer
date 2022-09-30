import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Button } from './Button';

describe('Button', () => {
  const givenComponentRendered = () => renderWithProviders(<Button>Hello</Button>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });

  test('should render spinner if loading', () => {
    renderWithProviders(<Button isLoading>Hello</Button>);
    expect(screen.queryByTestId('cmpsr.button.spinner')).not.toBeFalsy();
  });
});
