import React from 'react';
import { Typography } from '.';
import {
  TypographyTypes,
  TypographyIntensity,
  TypographyMode,
} from './Typography';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Composer|Style Guide',
  component: Typography,
};

enum tagOptions {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  span = 'span',
  label = 'label',
}

export const Typographies = () => (
  <Typography
    intensity={select(
      'Intensity',
      TypographyIntensity,
      TypographyIntensity.Regular
    )}
    type={select('Type', TypographyTypes, TypographyTypes.Headline1)}
    mode={select('Mode', TypographyMode, TypographyMode.Dark100)}
    tag={select('Tag', tagOptions, tagOptions.h1)}
  >
    The quick brown fox jumps over the lazy dog.
  </Typography>
);
