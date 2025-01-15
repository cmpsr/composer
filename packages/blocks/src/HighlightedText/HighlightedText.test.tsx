import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';

import { HighlightedText } from './HighlightedText';

describe('HighlightedText', () => {
  test('should render static members', () => {
    renderWithProviders(
      <HighlightedText contentAlignment="center">
        <HighlightedText.Overline>overline</HighlightedText.Overline>
        <HighlightedText.Title variant="textpairing-header-4XL">
          <HighlightedText.Title.Label>label</HighlightedText.Title.Label>
          <HighlightedText.Title.SubLabel color="text-secondary">subLabel</HighlightedText.Title.SubLabel>
        </HighlightedText.Title>
        <HighlightedText.Actions>
          <HighlightedText.Action variant="primary">link</HighlightedText.Action>
        </HighlightedText.Actions>
      </HighlightedText>,
    );
    screen.getByText('overline');
    screen.getByText('label');
    screen.getByText('subLabel');
    screen.getByText('link');
  });
});
