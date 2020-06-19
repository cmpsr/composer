import React from 'react';
import { Hero3 } from '.';
import {
  Link,
  LinkTypes,
  Typography,
  TypographyTypes,
} from 'components/primitives';

export default {
  title: 'Composer/Layout/Hero/Hero3',
  component: Hero3,
};

export const withText = () => (
  <Hero3
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  />
);

withText.story = {
  name: 'With text',
};

export const withPrimaryButtonLinkContent = () => (
  <Hero3
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  >
    <Link url="#" type={LinkTypes.Primary}>
      <Typography tag="span" type={TypographyTypes.Button}>
        Primary Link
      </Typography>
    </Link>
  </Hero3>
);

withPrimaryButtonLinkContent.story = {
  name: 'With primary button link content',
};

export const withSecondaryButtonLinkContent = () => (
  <Hero3
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  >
    <Link url="#" type={LinkTypes.Secondary}>
      <Typography tag="span" type={TypographyTypes.Button}>
        Secondary Link
      </Typography>
    </Link>
  </Hero3>
);

withSecondaryButtonLinkContent.story = {
  name: 'With secondary button link content',
};

export const withPrimarySecondaryButtonLinkContent = () => (
  <Hero3
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  >
    <div className="grid grid-cols-2 gap-2">
      <Link url="#" type={LinkTypes.Primary}>
        <Typography tag="span" type={TypographyTypes.Button}>
          Primary Link
        </Typography>
      </Link>
      <Link url="#" type={LinkTypes.Secondary}>
        <Typography tag="span" type={TypographyTypes.Button}>
          Secondary Link
        </Typography>
      </Link>
    </div>
  </Hero3>
);

withPrimarySecondaryButtonLinkContent.story = {
  name: 'With primary and secondary button link content',
};

export const withTextAndDesktopImage = () => (
  <Hero3
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    desktopAsset={{
      contentType: 'image',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
    }}
    style={{}}
  >
    <div className="grid grid-cols-2 gap-2">
      <Link url="#" type={LinkTypes.Primary}>
        <Typography tag="span" type={TypographyTypes.Button}>
          Primary Link
        </Typography>
      </Link>
      <Link url="#" type={LinkTypes.Secondary}>
        <Typography tag="span" type={TypographyTypes.Button}>
          Secondary Link
        </Typography>
      </Link>
    </div>
  </Hero3>
);

withTextAndDesktopImage.story = {
  name: 'With text and desktop image',
};

export const withTextDesktopAndMobileImage = () => (
  <Hero3
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    desktopAsset={{
      contentType: 'image',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
    }}
    mobileAsset={{
      contentType: 'image',
      title: 'Image Title',
      url:
        'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
    }}
    style={{}}
  >
    <div className="grid grid-cols-2 gap-2">
      <Link url="#" type={LinkTypes.Primary}>
        <Typography tag="span" type={TypographyTypes.Button}>
          Primary Link
        </Typography>
      </Link>
      <Link url="#" type={LinkTypes.Secondary}>
        <Typography tag="span" type={TypographyTypes.Button}>
          Secondary Link
        </Typography>
      </Link>
    </div>
  </Hero3>
);

withTextDesktopAndMobileImage.story = {
  name: 'With text, desktop and mobile image',
};
