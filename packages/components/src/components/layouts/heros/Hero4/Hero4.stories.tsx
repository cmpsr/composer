import React from 'react';
import { Hero4 } from '.';
import {
  Link,
  LinkTypes,
  Typography,
  TypographyTypes,
} from 'components/primitives';

export default {
  title: 'Composer/Layout/Hero/Hero4',
  component: Hero4,
};

export const withText = () => (
  <Hero4
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  />
);

withText.story = {
  name: 'With text',
};

export const withPrimaryButtonLinkContent = () => (
  <Hero4
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  >
    <Link url="#" type={LinkTypes.Primary}>
      <Typography tag="span" type={TypographyTypes.Button}>
        Primary Link
      </Typography>
    </Link>
  </Hero4>
);

withPrimaryButtonLinkContent.story = {
  name: 'With primary button link content',
};

export const withSecondaryButtonLinkContent = () => (
  <Hero4
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  >
    <Link url="#" type={LinkTypes.Secondary}>
      <Typography tag="span" type={TypographyTypes.Button}>
        Secondary Link
      </Typography>
    </Link>
  </Hero4>
);

withSecondaryButtonLinkContent.story = {
  name: 'With secondary button link content',
};

export const withPrimarySecondaryButtonLinkContent = () => (
  <Hero4
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
  </Hero4>
);

withPrimarySecondaryButtonLinkContent.story = {
  name: 'With primary and secondary button link content',
};

export const withTextAndDesktopImage = () => (
  <Hero4
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
  </Hero4>
);

withTextAndDesktopImage.story = {
  name: 'With text and desktop image',
};

export const withTextDesktopAndMobileImage = () => (
  <Hero4
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
  </Hero4>
);

withTextDesktopAndMobileImage.story = {
  name: 'With text, desktop and mobile image',
};
