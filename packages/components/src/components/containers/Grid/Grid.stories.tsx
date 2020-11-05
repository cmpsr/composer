import React from 'react';
import { Grid } from '.';
import { Asset, Typography } from 'components/primitives';
import { getTheme } from 'utils/getTheme';
import { number } from '@storybook/addon-knobs';

export default {
  title: 'Containers/Grid',
  component: Grid,
};

const twoOneColumnsStyle = `
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: ${getTheme({}).breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

interface Props {
  title: string;
  subtitle: string;
  asset?: any;
}

const Feature = ({ title, subtitle, asset }: Props) => (
  <div>
    {asset && <Asset asset={asset} />}
    <Typography tag={Typography.Tags.H4} type={Typography.Types.Headline4}>
      {title}
    </Typography>
    <Typography tag={Typography.Tags.Span} type={Typography.Types.Body}>
      {subtitle}
    </Typography>
  </div>
);

export const TwoColumnsDesktopOneMobile = () => (
  <Grid customCss={twoOneColumnsStyle}>
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
  </Grid>
);

const threeOneColumnsStyle = `
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: ${getTheme({}).breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ThreeColumnsDesktopOneMobile = () => (
  <Grid customCss={threeOneColumnsStyle}>
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    />
  </Grid>
);

export const TwoColumnsDesktopOneMobileWithImages = () => (
  <Grid customCss={twoOneColumnsStyle}>
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      asset={{
        contentType: Asset.ContentType.Image,
        title: 'Image Title',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
      }}
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      asset={{
        contentType: Asset.ContentType.Image,
        title: 'Image Title',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
      }}
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      asset={{
        contentType: Asset.ContentType.Image,
        title: 'Image Title',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
      }}
    />
    <Feature
      title="Create an Out-of-this-World website with this headline"
      subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
      asset={{
        contentType: Asset.ContentType.Image,
        title: 'Image Title',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
      }}
    />
  </Grid>
);

export const Playground = () => (
  <Grid
    customCss={`
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(${number('Mobile columns', 1)}, minmax(0, 1fr));
  @media (min-width: ${getTheme({}).breakpoints.md}) {
    grid-template-columns: repeat(${number(
      'Desktop columns',
      3
    )}, minmax(0, 1fr));
  }
`}
  >
    <Asset
      asset={{
        title: '',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
        contentType: Asset.ContentType.Image,
      }}
    />
    <Asset
      asset={{
        title: '',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
        contentType: Asset.ContentType.Image,
      }}
    />
    <Asset
      asset={{
        title: '',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
        contentType: Asset.ContentType.Image,
      }}
    />
    <Asset
      asset={{
        title: '',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
        contentType: Asset.ContentType.Image,
      }}
    />
    <Asset
      asset={{
        title: '',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
        contentType: Asset.ContentType.Image,
      }}
    />
    <Asset
      asset={{
        title: '',
        url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
        contentType: Asset.ContentType.Image,
      }}
    />
  </Grid>
);
