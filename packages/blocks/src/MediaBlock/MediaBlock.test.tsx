import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { MediaBlock } from '.';

describe('MediaBlock', () => {
  test('should render children', () => {
    renderWithProviders(
      <MediaBlock>
        <MediaBlock.Image />
        <MediaBlock.TextPairing labelProps={{ children: 'Label' }} subLabelProps={{ children: 'SubLabel' }} />
      </MediaBlock>
    );
    screen.getByRole('img');
    screen.getByText('Label');
    screen.getByText('SubLabel');
  });
});
