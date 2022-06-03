import React from 'react';
import { renderWithProviders } from '@tests/renderWithProviders';

import { BrandLogos } from './BrandLogos';
import { BrandLogosProps } from './types';

describe('BrandLogos', () => {
  const defaultProps = {
    logos: Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200'),
  };
  const givenComponentRendered = (props?: Partial<BrandLogosProps>) =>
    renderWithProviders(<BrandLogos {...defaultProps} {...props} />);

  test('should render text pairing when title and description are provided', () => {
    const { container } = givenComponentRendered({ title: 'Title', description: 'Description' });
    const textPairing = container.firstChild.firstChild.childNodes;
    expect(textPairing).toHaveLength(2);
  });
  test('should render text when title is provided', () => {
    const { container } = givenComponentRendered({ title: 'Title' });
    const text = container.firstChild.firstChild.childNodes;
    expect(text).toHaveLength(1);
  });
  test('should render text when description is provided', () => {
    const { container } = givenComponentRendered({ description: 'Description' });
    const text = container.firstChild.firstChild.childNodes;
    expect(text).toHaveLength(1);
  });
  test('should not render title or description when not provided', () => {
    const { container } = givenComponentRendered();
    const containerChildrens = container.firstChild.childNodes;
    expect(containerChildrens).toHaveLength(1);
  });
});
