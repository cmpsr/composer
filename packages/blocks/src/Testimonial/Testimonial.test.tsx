import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Testimonial } from './Testimonial';

describe('Testimonial', () => {
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
  const defaultProps = {
    backgroundColor: 'background-page',
    imageUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
    testimony:
      'We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it.',
    testimonyTextVariant: 'text-body-display-M',
    name: 'John Doe',
  };
  const givenComponentRendered = (props?: any) => renderWithProviders(<Testimonial {...defaultProps} {...props} />);

  test('should render legend when provided', () => {
    givenComponentRendered({ legend: 'legend' });
    screen.getByText('legend');
  });
  test('should render association when provided', () => {
    givenComponentRendered({ association: 'association' });
    screen.getByText('association');
  });
  test('should render link when provided', () => {
    givenComponentRendered({ link: { children: 'link', href: '#' } });
    screen.getByText('link');
  });
});
