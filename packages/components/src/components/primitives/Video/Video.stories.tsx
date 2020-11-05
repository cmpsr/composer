import React from 'react';
import { Video } from '.';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Video',
  component: Video,
};

export const Playground = () => (
  <Video
    video={{
      url: text('Url', 'https://www.quackit.com/video/pass-countdown.ogg'),
    }}
    autoPlay={boolean('Auto play', false)}
    controls={boolean('Controls', true)}
  />
);
