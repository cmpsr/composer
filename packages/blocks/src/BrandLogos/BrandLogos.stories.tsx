import React from 'react';
import { Meta } from '@storybook/react';

import { BrandLogos } from './BrandLogos';

export default {
  component: BrandLogos,
  title: 'Blocks/BrandLogos',
} as Meta;

export const WithText = () => (
  <BrandLogos
    backgroundColor={'background-page'}
    logos={Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200')}
    logosMaxHeight="12.5rem"
    textProps={{ children: 'Title', variant: 'text-header-2XL' }}
  />
);

export const WithTextPairing = () => (
  <BrandLogos
    backgroundColor={'background-page'}
    logos={Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200')}
    logosMaxHeight="12.5rem"
    textProps={{
      labelProps: { children: 'Title' },
      subLabelProps: { children: 'Description' },
      variant: 'textpairing-header-2XL',
    }}
  />
);

const Template = ({ logos, backgroundColor, logosMaxHeight, textProps }) => (
  <BrandLogos logos={logos} backgroundColor={backgroundColor} logosMaxHeight={logosMaxHeight} textProps={textProps} />
);

export const Playground = Template.bind({});
Playground.args = {
  logos: Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200'),
  backgroundColor: 'background-page',
  logosMaxHeight: '12.5rem',
  textProps: {
    labelProps: { children: 'Title' },
    subLabelProps: { children: 'Description' },
    variant: 'textpairing-header-2XL',
  },
};
