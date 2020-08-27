import React from 'react';
import { IconicBadge, BadgeColor } from '..';
import { search as Search } from '../../../Icon/icons/action';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Badges/IconicBadge',
  component: IconicBadge,
};

export const withIcon = () => (
  <IconicBadge
    icon={<Search type="filled" />}
    color={select('color', BadgeColor, BadgeColor.Primary)}
  />
);

withIcon.story = {
  name: 'With icon',
};

export const withPrimaryColor = () => (
  <IconicBadge
    color={select('color', BadgeColor, BadgeColor.Primary)}
    icon={<Search type="filled" />}
  />
);

withPrimaryColor.story = {
  name: 'With primary color',
};

export const withSecondaryColor = () => (
  <IconicBadge
    color={select('color', BadgeColor, BadgeColor.Secondary)}
    icon={<Search type="filled" />}
  />
);

withSecondaryColor.story = {
  name: 'With secondary color',
};

export const withErrorColor = () => (
  <IconicBadge
    color={select('color', BadgeColor, BadgeColor.Error)}
    icon={<Search type="filled" />}
  />
);

withErrorColor.story = {
  name: 'With error color',
};
