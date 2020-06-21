import React from 'react';
import { NumericBadge, BadgeColor } from '..';

export default {
  title: 'Composer/Primitive/Badges/NumericBadge',
  component: NumericBadge,
};

export const withNumber = () => <NumericBadge number={3} />;

withNumber.story = {
  name: 'With number',
};

export const withMaximumNumber = () => (
  <NumericBadge number={12} maximumNumber={9} />
);

withMaximumNumber.story = {
  name: 'With maximum number',
};

export const withPrimaryColor = () => (
  <NumericBadge color={BadgeColor.Primary} number={5} />
);

withPrimaryColor.story = {
  name: 'With primary color',
};

export const withSecondaryColor = () => (
  <NumericBadge color={BadgeColor.Secondary} number={5} />
);

withSecondaryColor.story = {
  name: 'With secondary color',
};

export const withErrorColor = () => (
  <NumericBadge color={BadgeColor.Error} number={5} />
);

withErrorColor.story = {
  name: 'With error color',
};
