import React from 'react';
import { render, screen } from '@testing-library/react';
import { Asset } from '.';
import { ContentType } from './Asset.types';

describe('Asset', () => {
  it('should render an image asset type', () => {
    givenComponentRendered(Asset.ContentType.Image);
    screen.getByTestId('image');
  });
  it('should render a video asset type', () => {
    givenComponentRendered(Asset.ContentType.Video);
    screen.getByTestId('video');
  });

  const givenComponentRendered = (type: ContentType) =>
    render(
      <Asset
        asset={{
          contentType: type,
          title: 'title',
          url: '#',
        }}
      />
    );
});
