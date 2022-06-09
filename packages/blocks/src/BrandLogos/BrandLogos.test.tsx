import React from 'react';
import { renderWithProviders } from '@tests/renderWithProviders';

import { BrandLogos } from './BrandLogos';
import { BrandLogosProps } from './types';

describe('BrandLogos', () => {
  const defaultProps = {
    logos: Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200'),
    textProps: {},
  };
  const givenComponentRendered = (props?: Partial<BrandLogosProps>) =>
    renderWithProviders(<BrandLogos {...defaultProps} {...props} />);

  test('should render text pairing when title and description are provided', () => {
    const { container } = givenComponentRendered({ textProps: { label: 'Title', subLabel: 'Description' } });
    const textPairing = container.firstChild.firstChild.childNodes;
    expect(textPairing).toHaveLength(2);
  });
  test('should render text when title is provided', () => {
    const { container } = givenComponentRendered({ textProps: { children: 'Title' } });
    const text = container.firstChild.firstChild.childNodes;
    expect(text).toHaveLength(1);
  });
});
