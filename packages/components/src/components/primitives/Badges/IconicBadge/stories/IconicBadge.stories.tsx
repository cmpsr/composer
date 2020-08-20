import React from 'react';
import { IconicBadge, BadgeColor } from '..';
import { search as Search } from '../../../Icon/icons/action';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Badges/IconicBadge',
  component: IconicBadge,
};

export const basic = () => <IconicBadge icon={<Search type="filled" />} color={select('color', BadgeColor, BadgeColor.Primary)} />;

basic.story = {
  name: 'Basic',
};
