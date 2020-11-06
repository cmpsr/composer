import React from 'react';
import { IconicBadge } from '.';
import { Icon, search as Search } from 'components/primitives/Icon';
import { select, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

export default {
  title: 'Primitives/Badges/IconicBadge',
  component: IconicBadge,
};

const icon = <Search type={Icon.Types.Filled} />;

export const Iconic = () => <IconicBadge icon={icon} />;

export const PrimaryColor = () => (
  <IconicBadge color={IconicBadge.Color.Primary} icon={icon} />
);

export const SecondaryColor = () => (
  <IconicBadge color={IconicBadge.Color.Secondary} icon={icon} />
);

export const ErrorColor = () => (
  <IconicBadge color={IconicBadge.Color.Error} icon={icon} />
);

export const Playground = () => (
  <ThemeProvider
    theme={{
      ...theme,
      IconicBadge: {
        height: text('Height', '1.25rem'),
        width: text('Width', '1.25rem'),
        padding: text('Padding', '0.15rem'),
      },
    }}
  >
    <IconicBadge
      color={select('Color', IconicBadge.Color, IconicBadge.Color.Primary)}
      icon={icon}
    />
  </ThemeProvider>
);
