import React from 'react';

import { Link, LinkTypes } from '..';
import { Icon } from 'components/primitives/Icon';
import { favorite as Favorite } from '../../Icon/icons/action';
import { Typography, TypographyTypes } from 'components/primitives/Typography';

export default {
  title: 'Composer/Primitive/Link/SecondaryButton',
  component: Link,
};

export const withText = () => (
  <span className="flex">
    <Link url="#" type={LinkTypes.Secondary}>
      <Typography tag="span" type={TypographyTypes.Link}>
        Secondary Link
      </Typography>
    </Link>
  </span>
);

withText.story = {
  name: 'With text',
};

export const withIcon = () => (
  <span className="flex">
    <Link url="#" type={LinkTypes.Secondary}>
      <Typography tag="span" type={TypographyTypes.Link}>
        Secondary Link
      </Typography>
      <Icon className="fill-current" width={20} height={20}>
        <Favorite type="filled" />
      </Icon>
    </Link>
  </span>
);

withIcon.story = {
  name: 'With icon',
};

export const fullWidth = () => (
  <Link url="#" type={LinkTypes.Secondary}>
    <Typography tag="span" type={TypographyTypes.Link}>
      Secondary Link
    </Typography>
  </Link>
);

fullWidth.story = {
  name: 'Full width',
};
