import React from 'react';
import { EmbeddedFeature1 } from '../features/EmbeddedFeature1';
import { Grid } from '.';
import { Link, Asset } from 'components/primitives';

export default {
  title: 'Composer/Layout/Grid/EmbeddedFeature1',
  component: Grid,
};

export const with2ColumnsDesktop1Mobile = () => (
  <Grid
    style={{
      grid: {
        md: {
          'grid-cols': 2,
        },
        default: {
          gap: 4,
          'grid-cols': 1,
        },
      },
    }}
  >
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
  </Grid>
);

with2ColumnsDesktop1Mobile.story = {
  name: 'With 2/1 columns',
};

export const with3ColumnsDesktop1Mobile = () => (
  <Grid
    style={{
      grid: {
        md: {
          'grid-cols': 3,
        },
        default: {
          gap: 4,
          'grid-cols': 1,
        },
      },
    }}
  >
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
    />
  </Grid>
);

with3ColumnsDesktop1Mobile.story = {
  name: 'With 3/1 columns',
};

export const with2ColumnsDesktop1MobileImage = () => (
  <Grid
    style={{
      grid: {
        md: {
          'grid-cols': 2,
        },
        default: {
          gap: 4,
          'grid-cols': 1,
        },
      },
    }}
  >
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
      embeddedAsset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
      }}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
      embeddedAsset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
      }}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
      embeddedAsset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
      }}
    />
    <EmbeddedFeature1
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      style={{}}
      embeddedAsset={{
        contentType: 'image',
        title: 'Image Title',
        url:
          'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
      }}
    />
  </Grid>
);

with2ColumnsDesktop1MobileImage.story = {
  name: 'With 2/1 columns: EmbeddedFeature1',
};

export const withEmbeddedImageLinks = () => (
  <Grid
    style={{
      grid: {
        md: {
          'grid-cols': 6,
        },
        default: {
          gap: 4,
          'grid-cols': 3,
        },
      },
    }}
  >
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
  </Grid>
);

withEmbeddedImageLinks.story = {
  name: 'With 6/3 columns: Link Image',
};
