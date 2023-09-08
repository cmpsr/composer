import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  test('should render the default Skeleton', () => {
    renderWithProviders(<Skeleton />);
    screen.getByTestId('cmpsr.skeleton-default');
  });

  test('should render the text Skeleton', () => {
    renderWithProviders(<Skeleton variant="text" />);
    screen.getByTestId('cmpsr.skeleton-text');
  });

  test('should render the circle Skeleton', () => {
    renderWithProviders(<Skeleton variant="circle" />);
    screen.getByTestId('cmpsr.skeleton-circle');
  });
});
