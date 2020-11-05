import React from 'react';
import { Asset } from '.';
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Asset',
  component: Asset,
};

export const Image = () => (
  <Asset
    asset={{
      contentType: Asset.ContentType.Image,
      title: 'Image Title',
      url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
    }}
  />
);

export const Video = () => (
  <Asset
    asset={{
      contentType: Asset.ContentType.Video,
      title: 'Video Title',
      url: 'https://www.quackit.com/video/pass-countdown.ogg',
    }}
    autoPlay={false}
    controls={true}
  />
);

export const Playground = () => (
  <Asset
    asset={{
      contentType: select(
        'Content type',
        Asset.ContentType,
        Asset.ContentType.Image
      ),
      title: text('Title', 'Title'),
      url: text(
        'Url',
        'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4'
      ),
    }}
    autoPlay={boolean('Auto play', false)}
    controls={boolean('Controls', true)}
  />
);
