import React from 'react';

import { Asset } from 'components/primitives/Asset';
import { Link } from '..';

export default {
  title: 'Composer/Primitive/Link/Image',
  component: Link,
};

export const withURL = () => (
  <Link url="https://www.google.com">
    <Asset
      asset={{
        title: '',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
        contentType: 'image',
      }}
    />
  </Link>
);

withURL.story = {
  name: 'With URL',
};

export const withoutURL = () => (
  <Link>
    <Asset
      asset={{
        title: '',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/3muBNiFvfwvLm62w16Plzp/69977f9df63957d51016cc35031e1254/Google.svg',
        contentType: 'image',
      }}
    />
  </Link>
);

withoutURL.story = {
  name: 'Without URL',
};
