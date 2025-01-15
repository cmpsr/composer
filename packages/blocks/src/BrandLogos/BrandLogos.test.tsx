import React from 'react';
import { renderWithProviders, screen } from '../tests/renderWithProviders';

import { BrandLogos } from './BrandLogos';

describe('BrandLogos', () => {
  test('should render text pairing when title and description are provided', () => {
    const { container } = renderWithProviders(
      <BrandLogos>
        <BrandLogos.Title>
          <BrandLogos.Title.Label>Title</BrandLogos.Title.Label>
          <BrandLogos.Title.SubLabel>Description</BrandLogos.Title.SubLabel>
        </BrandLogos.Title>
        <BrandLogos.ImagesContainer>
          <BrandLogos.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        </BrandLogos.ImagesContainer>
      </BrandLogos>,
    );
    const textPairing = container.firstChild.firstChild.childNodes;
    expect(textPairing).toHaveLength(2);
  });
  test('should render text when title is provided', () => {
    const { container } = renderWithProviders(
      <BrandLogos>
        <BrandLogos.Title>
          <BrandLogos.Title.Label>Title</BrandLogos.Title.Label>
        </BrandLogos.Title>
        <BrandLogos.ImagesContainer>
          <BrandLogos.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        </BrandLogos.ImagesContainer>
      </BrandLogos>,
    );
    const text = container.firstChild.firstChild.childNodes;
    expect(text).toHaveLength(1);
  });
  test('should render image', () => {
    renderWithProviders(
      <BrandLogos>
        <BrandLogos.ImagesContainer>
          <BrandLogos.Image src="https://avatars0.githubusercontent.com/u/67131017?s=200" />
        </BrandLogos.ImagesContainer>
      </BrandLogos>,
    );
    screen.getByRole('img');
  });
  test('should render overline', () => {
    renderWithProviders(
      <BrandLogos>
        <BrandLogos.Overline>Overline</BrandLogos.Overline>
      </BrandLogos>,
    );
    screen.getByText('Overline');
  });
});
