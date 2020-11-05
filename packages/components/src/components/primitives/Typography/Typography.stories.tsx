import React from 'react';
import { Typography } from '.';
import { select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Typography',
  component: Typography,
};

export const Types = () => (
  <>
    <h1>Typography types</h1>
    {Object.keys(Typography.Types).map((type: any) => (
      <>
        <Typography type={Typography.Types[type]}>{type} Typography</Typography>
        <br />
      </>
    ))}
  </>
);

export const Intensities = () => (
  <>
    <h1>Typography intensities</h1>
    {Object.keys(Typography.Intensities).map((intensity: any) => (
      <>
        <Typography intensity={Typography.Intensities[intensity]}>
          {intensity} Typography
        </Typography>
        <br />
      </>
    ))}
  </>
);

export const Modes = () => (
  <>
    <h1>Typography Modes</h1>
    {Object.keys(Typography.Modes).map((mode: any) => (
      <>
        <Typography mode={Typography.Modes[mode]}>{mode} Typography</Typography>
        <br />
      </>
    ))}
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <Typography
      type={select(
        'Typography type',
        Typography.Types,
        Typography.Types.Headline1
      )}
      mode={select(
        'Typography mode',
        Typography.Modes,
        Typography.Modes.Dark100
      )}
      intensity={select(
        'Typography intensity',
        Typography.Intensities,
        Typography.Intensities.Regular
      )}
    >
      Playground
    </Typography>
  </>
);
