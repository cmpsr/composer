import React from 'react';

import { Icon } from 'components/primitives/Icon';
import { favorite as Favorite } from '../../Icon/icons/action';
import { Link } from '..';
import { Typography, TypographyTypes } from 'components/primitives/Typography';

export default {
  title: 'Composer/Primitive/Link/Default',
  component: Link,
};

export const withText = () => (
  <Link url="#">
    <Typography tag="span" type={TypographyTypes.Link}>
      Primary Link
    </Typography>
  </Link>
);
withText.story = {
  name: 'With text',
};

export const withIcon = () => (
  <Link url="#" className="flex items-center">
    <Typography tag="span" type={TypographyTypes.Link}>
      Primary Link
    </Typography>
    <Icon className="fill-current" width={20} height={20}>
      <Favorite type="filled" />
    </Icon>
  </Link>
);

withIcon.story = {
  name: 'With icon',
};
