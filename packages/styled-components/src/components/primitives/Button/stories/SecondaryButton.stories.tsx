import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonTypes, ButtonShapes } from '..';
//import { Icon } from 'components/primitives/Icon';
//import { favorite as Favorite } from '../../Icon/icons/action';
//import { Typography, TypographyTypes } from 'components/primitives/Typography';

export default {
  title: 'Composer/Primitive/Button/SecondaryButton',
  component: Button
};

export const withText = () => (
  <Button type={ButtonTypes.Secondary} onClick={action('button action click')}>
    Secondary Button
  </Button>
);

/*export const withText = () => (
  <Button type={ButtonTypes.Secondary} onClick={action('button action click')}>
    <Typography tag="span" type={TypographyTypes.Button}>
      Secondary Button
    </Typography>
  </Button>
);

withText.story = {
  name: 'With text',
};

export const withIcon = () => (
  <Button type={ButtonTypes.Secondary} onClick={action('button action click')}>
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
  </Button>
);

withIcon.story = {
  name: 'With icon',
};

export const withTextIcon = () => (
  <Button type={ButtonTypes.Secondary} onClick={action('button action click')}>
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
    <Typography tag="span" type={TypographyTypes.Button} className="mx-1">
      Secondary Button
    </Typography>
  </Button>
);

withTextIcon.story = {
  name: 'With text and icon',
};

export const secondaryIconAlignment = () => (
  <Button type={ButtonTypes.Secondary} onClick={action('button action click')}>
    <Typography tag="span" type={TypographyTypes.Button} className="mx-1">
      Secondary Button
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
    disabled
    type={ButtonTypes.Secondary}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      Secondary Button Disabled
    </Typography>
  </Button>
);

withDisabled.story = {
  name: 'With disabled',
};

export const withRoundedBorder = () => (
  <Button
    shape={ButtonShapes.Rounded}
    type={ButtonTypes.Secondary}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      Secondary Button Rounded
    </Typography>
  </Button>
);

withRoundedBorder.story = {
  name: 'With rounded',
};

export const withSemiRoundedBorder = () => (
  <Button
    shape={ButtonShapes.SemiRounded}
    type={ButtonTypes.Secondary}
    onClick={action('button action click')}
  >
    <Typography tag="span" type={TypographyTypes.Button}>
      Secondary Button Semi Rounded
    </Typography>
  </Button>
);

withSemiRoundedBorder.story = {
  name: 'With semi rounded',
};
*/
