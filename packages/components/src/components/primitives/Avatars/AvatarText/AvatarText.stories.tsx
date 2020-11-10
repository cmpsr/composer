import React from 'react';
import { AvatarText } from '.';
import { boolean, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Avatars/AvatarText',
  component: AvatarText,
};

export const Sizes = () => (
  <>
    <h1>AvatarText sizes</h1>
    {Object.keys(AvatarText.Sizes).map((size: any) => (
      <>
        <AvatarText
          size={AvatarText.Sizes[size]}
          text="text"
          backgroundColor={AvatarText.BackgroundColors.Primary900}
        />
        <br />
      </>
    ))}
  </>
);

export const Colors = () => (
  <>
    <h1>AvatarText colors</h1>
    {Object.keys(AvatarText.BackgroundColors).map((backgroundColor: any) => (
      <>
        <AvatarText
          backgroundColor={AvatarText.BackgroundColors[backgroundColor]}
          size={AvatarText.Sizes.Medium}
          text="text"
        />
        <br />
      </>
    ))}
  </>
);

export const Highlight = () => (
  <>
    <h1>AvatarText highlight</h1>
    <AvatarText
      isHighlighted
      text="OH"
      size={AvatarText.Sizes.Medium}
      backgroundColor={AvatarText.BackgroundColors.Primary900}
    />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <AvatarText
      size={select('AvatarText size', AvatarText.Sizes, AvatarText.Sizes.Large)}
      text={text('AvatarText text', 'OH')}
      backgroundColor={select(
        'AvatarText background',
        AvatarText.BackgroundColors,
        AvatarText.BackgroundColors.Primary600
      )}
      isHighlighted={boolean('AvatarText highlight', false)}
    />
  </>
);
