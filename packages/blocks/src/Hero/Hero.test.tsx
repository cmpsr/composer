import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Hero } from './Hero';

describe('Hero', () => {
  const defaultProps = {
    backgroundColor: 'background-page',
    title: 'The next generation of care for women and families',
    description: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
    contentAlignment: 'start',
    imageUrl: 'https://avatars0.githubusercontent.com/u/67131017?s=200',
    imageProps: { maxWidth: '20rem' },
    imagePosition: 'right',
  };
  const givenComponentRendered = (props?: any) => renderWithProviders(<Hero {...defaultProps} {...props} />);

  test('should render primaryCta when provided', () => {
    givenComponentRendered({ primaryCta: { copy: 'primaryFoo', href: '#', variant: 'primary' } });
    screen.getByText('primaryFoo');
  });
  test('should render secondaryCta when provided', () => {
    givenComponentRendered({ secondaryCta: { copy: 'secondaryFoo', href: '#', variant: 'secondary' } });
    screen.getByText('secondaryFoo');
  });
});
