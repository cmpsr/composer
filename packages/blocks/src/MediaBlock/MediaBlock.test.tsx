import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';
import { MediaBlock } from '.';

describe('MediaBlock', () => {
  test('should render children', () => {
    renderWithProviders(
      <MediaBlock>
        <MediaBlock.Image />
        <MediaBlock.Title>
          <MediaBlock.Title.Label>Label</MediaBlock.Title.Label>
          <MediaBlock.Title.SubLabel>SubLabel</MediaBlock.Title.SubLabel>
        </MediaBlock.Title>
        <MediaBlock.Overline>Overline</MediaBlock.Overline>
        <MediaBlock.Tag>
          <MediaBlock.Tag.Label>Tag</MediaBlock.Tag.Label>
        </MediaBlock.Tag>
        <MediaBlock.Action>Link</MediaBlock.Action>
      </MediaBlock>,
    );
    screen.getByRole('img');
    screen.getByText('Label');
    screen.getByText('SubLabel');
    screen.getByText('Tag');
    screen.getByText('Link');
    screen.getByText('Overline');
  });
});
