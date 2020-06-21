import React from 'react';
import { Feature2 } from '.';
import {
  Link,
  LinkTypes,
  TypographyTypes,
  Typography,
} from 'components/primitives';

export default {
  title: 'Composer/Layout/Feature/Feature2',
  component: Feature2,
};

export const withText = () => (
  <Feature2
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  />
);

withText.story = {
  name: 'With text',
};

export const withPrimaryButtonLinkContent = () => (
  <Feature2
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  >
    <Link url="#" type={LinkTypes.Primary}>
      <Typography tag="span" type={TypographyTypes.Button}>
        Primary Link
      </Typography>
    </Link>
  </Feature2>
);

withPrimaryButtonLinkContent.story = {
  name: 'With primary button link content',
};

export const withSecondaryButtonLinkContent = () => (
  <Feature2
    title="Create an Out-of-this-World website with this headline"
    subtitle="We are right now on the verge of finding out whether there is life elsewhere in the universe, and there are three ways we could find it."
    style={{}}
  >
    <Link url="#" type={LinkTypes.Secondary}>
      <Typography tag="span" type={TypographyTypes.Button}>
        Secondary Link
      </Typography>
    </Link>
  </Feature2>
);

withSecondaryButtonLinkContent.story = {
  name: 'With secondary button link content',
};

export const withPrimarySecondaryButtonLinkContent = () => (
  <Feature2
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
        {' '}
        <Typography tag="span" type={TypographyTypes.Button}>
          Secondary Link
        </Typography>
      </Link>
    </div>
  </Feature2>
);

withPrimarySecondaryButtonLinkContent.story = {
  name: 'With primary and secondary button link content',
};

export const withTextAndDesktopImage = () => (
  <Feature2
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
  </Feature2>
);

withTextAndDesktopImage.story = {
  name: 'With text and desktop image',
};

export const withTextDesktopAndMobileImage = () => (
  <Feature2
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
  </Feature2>
);

withTextDesktopAndMobileImage.story = {
  name: 'With text, desktop and mobile image',
};
