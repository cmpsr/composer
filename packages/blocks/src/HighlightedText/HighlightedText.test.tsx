import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { HighlightedText } from './HighlightedText';

describe('HighlightedText', () => {
  test('should render static members', () => {
    renderWithProviders(
      <HighlightedText contentAlignment="center">
        <HighlightedText.Legend>legend</HighlightedText.Legend>
        <HighlightedText.TextPairing variant="textpairing-header-4XL">
          <HighlightedText.TextPairing.Label>label</HighlightedText.TextPairing.Label>
          <HighlightedText.TextPairing.SubLabel color="text-secondary">subLabel</HighlightedText.TextPairing.SubLabel>
        </HighlightedText.TextPairing>
        <HighlightedText.LinkGroup>
          <HighlightedText.Link variant="primary">link</HighlightedText.Link>
        </HighlightedText.LinkGroup>
      </HighlightedText>
    );
    screen.getByText('legend');
    screen.getByText('label');
    screen.getByText('subLabel');
    screen.getByText('link');
  });
});
