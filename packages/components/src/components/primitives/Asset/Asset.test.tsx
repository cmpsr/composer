import React from 'react';
import { render } from '@testing-library/react';
import { Asset } from './Asset';
import { IMAGE_DEFAULT_TEST_ID } from '../../primitives/Image';
import { VIDEO_DEFAULT_TEST_ID } from '../../primitives/Video';

describe('Asset', () => {
  it('should render an image asset type', () => {
    const { getByTestId } = render(
      <Asset
        asset={{
          contentType: 'image',
          title: 'image title',
          url:
            'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
        }}
      />,
    );
    const asset = getByTestId(IMAGE_DEFAULT_TEST_ID);
    expect(asset.children.length).toBe(0);
  });
  it('should render a video asset type', () => {
    const { getByTestId } = render(
      <Asset
        asset={{
          contentType: 'video',
          title: 'video title',
          url: '#',
        }}
      />,
    );
    const asset = getByTestId(VIDEO_DEFAULT_TEST_ID);
    expect(asset.children.length).toBe(0);
  });
});
