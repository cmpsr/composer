import React from 'react';

import { Navigation3 } from '.';
import {
  Link,
  Asset,
  Typography,
  TypographyTypes,
} from 'components/primitives';

export default {
  title: 'Composer/Layout/Navigation/Navigation3',
  component: Navigation3,
};

export const withContentCenterAndSearch = () => (
  <Navigation3 style={{}}>
    {{
      logo: (
        <Link url="https://www.google.com">
          <Asset
            asset={{
              title: '',
              url:
                'https://images.ctfassets.net/o9153kt66j4s/6jk4DaIRMlx1CyOXIiLN5F/acebc0468bf2df33d069774c8e8e5bf6/Composer_-_white.svg',
              contentType: 'image',
            }}
          />
        </Link>
      ),
      content: [
        <Link url="#" key="0">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="1">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="2">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="3">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="4">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
        <Link url="#" key="5">
          <Typography tag="span" type={TypographyTypes.Link}>
            Link
          </Typography>
        </Link>,
      ],
    }}
  </Navigation3>
);

withContentCenterAndSearch.story = {
  name: 'With content centered and search',
};
