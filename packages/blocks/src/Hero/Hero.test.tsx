import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Hero } from './Hero';

describe('Hero', () => {
  const defaultProps = {
    backgroundColor: 'background-page',
    textPairingProps: {
      label: 'The next generation of care for women and families',
      subLabel: 'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
    },
    contentAlignment: 'start',
    imageProps: { maxWidth: '20rem', src: 'https://avatars0.githubusercontent.com/u/67131017?s=200' },
    imagePosition: 'right',
  };
  const givenComponentRendered = (props?: any) => renderWithProviders(<Hero {...defaultProps} {...props} />);

  test('should render primaryCta when provided', () => {
    givenComponentRendered({ primaryCta: { children: 'primaryFoo', href: '#', variant: 'primary' } });
    screen.getByText('primaryFoo');
  });
  test('should render secondaryCta when provided', () => {
    givenComponentRendered({ secondaryCta: { children: 'secondaryFoo', href: '#', variant: 'secondary' } });
    screen.getByText('secondaryFoo');
  });
});