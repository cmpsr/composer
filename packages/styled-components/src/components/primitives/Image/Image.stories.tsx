import React from 'react';
import { Image } from '.';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Image',
  component: Image,
};

const customCss = {
  none: null,
  customWidth: `
    width: 10%;
    cursor: pointer;
  `,
};

export const Playground = () => (
  <Image
    image={{
      title: text('Title', 'Image Title'),
      url: text(
        'Url',
        'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4'
      ),
    }}
    onLoad={action('Image loaded')}
    customCss={select('Custom css', customCss, customCss.none)}
  />
);
