import React from 'react';

import { Icon } from 'components/primitives/Icon';
import { favorite as Favorite } from '../../Icon/icons/action';
import { Link, LinkTypes } from '..';
import { Typography, TypographyTypes } from 'components/primitives/Typography';

export default {
  title: 'Composer/Primitive/Link/PrimaryButton',
  component: Link,
};

export const withText = () => (
  <span className="flex">
    <Link url="#" type={LinkTypes.Primary} className="flex-grow-0">
      <Typography tag="span" type={TypographyTypes.Link}>
        Primary Link
      </Typography>
    </Link>
  </span>
);

withText.story = {
  name: 'With text',
};

export const withIcon = () => (
  <span className="flex">
    <Link url="#" type={LinkTypes.Primary}>
      <Typography tag="span" type={TypographyTypes.Link}>
        Primary Link
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
  <Link url="#" type={LinkTypes.Primary}>
    <Typography tag="span" type={TypographyTypes.Link}>
      Primary Link
    </Typography>
  </Link>
);

fullWidth.story = {
  name: 'Full width',
};
