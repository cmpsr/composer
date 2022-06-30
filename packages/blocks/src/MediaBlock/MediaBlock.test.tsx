import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { MediaBlock } from '.';

describe('MediaBlock', () => {
  test('should render children', () => {
    renderWithProviders(
      <MediaBlock>
        <MediaBlock.Image />
        <MediaBlock.TextPairing>
          <MediaBlock.TextPairing.Label>Label</MediaBlock.TextPairing.Label>
          <MediaBlock.TextPairing.SubLabel>SubLabel</MediaBlock.TextPairing.SubLabel>
        </MediaBlock.TextPairing>
      </MediaBlock>
    );
    screen.getByRole('img');
    screen.getByText('Label');
    screen.getByText('SubLabel');
  });
});
