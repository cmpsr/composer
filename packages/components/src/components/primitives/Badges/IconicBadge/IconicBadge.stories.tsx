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

export const Colors = () => (
  <>
    <h1>IconicBadge colors</h1>
    {Object.keys(IconicBadge.Color).map((color: any) => (
      <>
        <IconicBadge color={IconicBadge.Color[color]} icon={icon} />
        <br />
      </>
    ))}
  </>
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
