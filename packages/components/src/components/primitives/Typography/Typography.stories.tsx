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

export const Headlines = () => (
  <div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Headline1</p>
      <Typography tag="h1" type={TypographyTypes.Headline1}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Headline2</p>
      <Typography tag="h1" type={TypographyTypes.Headline2}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Headline3</p>
      <Typography tag="h1" type={TypographyTypes.Headline3}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Headline4</p>
      <Typography tag="h1" type={TypographyTypes.Headline4}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Headline5</p>
      <Typography tag="h1" type={TypographyTypes.Headline5}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Headline6</p>
      <Typography tag="h1" type={TypographyTypes.Headline6}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
  </div>
);

export const Copy = () => (
  <div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Body</p>
      <Typography tag="p" type={TypographyTypes.Body}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Detail</p>
      <Typography tag="p" type={TypographyTypes.Detail}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Eyebrow</p>
      <Typography tag="p" type={TypographyTypes.Eyebrow}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Form</p>
      <Typography tag="p" type={TypographyTypes.Form}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Button</p>
      <Typography tag="p" type={TypographyTypes.Button}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
    <div className="flex flex-row items-center my-4">
      <p className="mr-4">Link</p>
      <Typography tag="p" type={TypographyTypes.Link}>
        The quick brown fox jumps over the lazy dog.
      </Typography>
    </div>
  </div>
);

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
