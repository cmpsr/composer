import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Button } from '..';
import { Icon } from 'components/primitives/Icon';
import { favorite as Favorite } from '../../Icon/icons/action';
import { Typography, TypographyTypes } from 'components/primitives/Typography';
import { ButtonTypes, ButtonShapes } from '../Button';

export default {
  title: 'Composer/Primitive/Button/SecondaryButton',
  component: Button,
};

export const withText = () => (
  <Button type={select('Type', ButtonTypes, ButtonTypes.Secondary)} onClick={action('button action click')}>
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Secondary Button')}
    </Typography>
  </Button>
);

withText.story = {
  name: 'With text',
};

export const withIcon = () => (
  <Button type={select('Type', ButtonTypes, ButtonTypes.Secondary)} onClick={action('button action click')}>
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
  </Button>
);

withIcon.story = {
  name: 'With icon',
};

export const withTextIcon = () => (
  <Button type={select('Type', ButtonTypes, ButtonTypes.Secondary)} onClick={action('button action click')}>
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
    <Typography tag="span" type={TypographyTypes.Button} className="mx-1">
      {text('Text', 'Secondary Button')}
    </Typography>
  </Button>
);

withTextIcon.story = {
  name: 'With text and icon',
};

export const secondaryIconAlignment = () => (
  <Button type={select('Type', ButtonTypes, ButtonTypes.Secondary)} onClick={action('button action click')}>
    <Typography tag="span" type={TypographyTypes.Button} className="mx-1">
      {text('Text', 'Secondary Button')}
    </Typography>
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
  </Button>
);

secondaryIconAlignment.story = {
  name: 'With text and icon alignment',
};

export const withDisabled = () => (
  <Button
    disabled={boolean('Disabled', true)}
    type={select('Type', ButtonTypes, ButtonTypes.Secondary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Secondary Button Disabled')}
    </Typography>
  </Button>
);

withDisabled.story = {
  name: 'With disabled',
};

export const withRoundedBorder = () => (
  <Button
    shape={select('Shape', ButtonShapes, ButtonShapes.Rounded)}
    type={select('Type', ButtonTypes, ButtonTypes.Secondary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Secondary Button Rounded')}
    </Typography>
  </Button>
);

withRoundedBorder.story = {
  name: 'With rounded',
};

export const withSemiRoundedBorder = () => (
  <Button
    shape={select('Shape', ButtonShapes, ButtonShapes.SemiRounded)}
    type={select('Type', ButtonTypes, ButtonTypes.Secondary)}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      {text('Text', 'Secondary Button Semi Rounded')}
    </Typography>
  </Button>
);

withSemiRoundedBorder.story = {
  name: 'With semi rounded',
};