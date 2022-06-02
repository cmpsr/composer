import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { BrandLogos } from './BrandLogos';
import { BrandLogosProps } from './types';

describe('BrandLogos', () => {
  const defaultProps = {
    logos: Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200'),
  };
  const givenComponentRendered = (props?: Partial<BrandLogosProps>) =>
    renderWithProviders(<BrandLogos {...defaultProps} {...props} />);

  test('should render text pairing when title and description are provided', () => {
    givenComponentRendered({ title: 'Title', description: 'Description' });
    const brandLogos = screen.getByTestId('brand-logos');
    const textPairing = brandLogos.firstChild.childNodes;
    expect(textPairing).toHaveLength(2);
  });
  test('should render text when title or description are provided', () => {
    givenComponentRendered({ title: 'Title' });
    const brandLogos = screen.getByTestId('brand-logos');
    const text = brandLogos.firstChild.childNodes;
    expect(text).toHaveLength(1);
  });
  test('should not render title or description when not provided', () => {
    givenComponentRendered();
    const brandLogos = screen.getByTestId('brand-logos');
    const containerChildrens = brandLogos.childNodes;
    expect(containerChildrens).toHaveLength(1);
  });
});
