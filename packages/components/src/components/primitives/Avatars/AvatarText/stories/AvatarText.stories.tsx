import React from 'react';
import { AvatarText, AvatarBackgroundColor, AvatarSize } from '..';
import { text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Avatars/AvatarText',
  component: AvatarText,
};

export const withBase = () => (
  <AvatarText
    size={select('Size', AvatarSize, AvatarSize.Large)}
    text={text('Text', 'OK')}
    backgroundColor={select(
      'Background Color',
      AvatarBackgroundColor,
      AvatarBackgroundColor.Primary900
    )}
    isHighlighted={boolean('Highlighted', false)}
  />
);

withBase.story = {
  name: 'With base',
};
