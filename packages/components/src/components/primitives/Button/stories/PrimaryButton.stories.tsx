import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Button, ButtonTypes, ButtonShapes } from '..';
import { Icon } from 'components/primitives/Icon';
import { favorite as Favorite } from '../../Icon/icons/action';
import { Typography, TypographyTypes } from 'components/primitives/Typography';

export default {
  title: 'Composer/Primitive/Button/PrimaryButton',
  component: Button,
};

export const withText = () => (
  <Button
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Primary Button')}
    </Typography>
  </Button>
);

withText.story = {
  name: 'With text',
};

export const withIcon = () => (
  <Button
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
  </Button>
);

withIcon.story = {
  name: 'With icon',
};

export const withTextIcon = () => (
  <Button
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
    <Typography tag="span" type={TypographyTypes.Button} className="mx-1">
      {text('Text', 'Primary Button')}
    </Typography>
  </Button>
);

withTextIcon.story = {
  name: 'With text and icon',
};

export const primaryIconAlignment = () => (
  <Button
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button} className="mx-1">
      {text('Text', 'Primary Button')}
    </Typography>
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
  </Button>
);

primaryIconAlignment.story = {
  name: 'With text and icon alignment',
};

export const withDisabled = () => (
  <Button
    disabled={boolean('Disabled', true)}
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Primary Button Disabled')}
    </Typography>
  </Button>
);

withDisabled.story = {
  name: 'With disabled',
};

export const withRoundedBorder = () => (
  <Button
    shape={select('Shape', ButtonShapes, ButtonShapes.Rounded)}
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Primary Button Rounded')}
    </Typography>
  </Button>
);

withRoundedBorder.story = {
  name: 'With rounded',
};

export const withSemiRoundedBorder = () => (
  <Button
    shape={select('Shape', ButtonShapes, ButtonShapes.SemiRounded)}
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Primary Button Semi Rounded')}
    </Typography>
  </Button>
);

withSemiRoundedBorder.story = {
  name: 'With semi rounded',
};

export const testChromatic = () => (
  <Button
    shape={select('Shape', ButtonShapes, ButtonShapes.SemiRounded)}
    type={select('Type', ButtonTypes, ButtonTypes.Primary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Test button')}
    </Typography>
  </Button>
);

testChromatic.story = {
  name: 'Testing out Chromatic',
};
