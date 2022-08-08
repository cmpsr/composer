import React from 'react';
import { Meta } from '@storybook/react';

import { BrandLogos } from './BrandLogos';

export default {
  component: BrandLogos,
  title: 'Blocks/BrandLogos',
} as Meta;

export const WithText = () => (
  <BrandLogos backgroundColor="background-page">
    <BrandLogos.Text variant="text-header-2XL">Title</BrandLogos.Text>
    <BrandLogos.ImagesContainer>
      {Array(8)
        .fill('https://avatars0.githubusercontent.com/u/67131017?s=200')
        .map((image, i) => (
          <BrandLogos.Image src={image} key={i} maxHeight="12.5rem" />
        ))}
    </BrandLogos.ImagesContainer>
  </BrandLogos>
);

export const WithTextPairing = () => (
  <BrandLogos backgroundColor="background-page">
    <BrandLogos.TextPairing variant="textpairing-header-2XL" textAlign="center">
      <BrandLogos.TextPairing.Label>Title</BrandLogos.TextPairing.Label>
      <BrandLogos.TextPairing.SubLabel>Description</BrandLogos.TextPairing.SubLabel>
    </BrandLogos.TextPairing>
    <BrandLogos.ImagesContainer>
      {Array(8)
        .fill('https://avatars0.githubusercontent.com/u/67131017?s=200')
        .map((image, i) => (
          <BrandLogos.Image src={image} key={i} maxHeight="12.5rem" />
        ))}
    </BrandLogos.ImagesContainer>
  </BrandLogos>
);

const Template = ({ logos, backgroundColor, logosMaxHeight, label, subLabel }) => (
  <BrandLogos backgroundColor={backgroundColor}>
    <BrandLogos.TextPairing variant="textpairing-header-2XL" textAlign="center">
      <BrandLogos.TextPairing.Label>{label}</BrandLogos.TextPairing.Label>
      <BrandLogos.TextPairing.SubLabel>{subLabel}</BrandLogos.TextPairing.SubLabel>
    </BrandLogos.TextPairing>
    <BrandLogos.ImagesContainer>
      {logos.map((image, i) => (
        <BrandLogos.Image src={image} key={i} maxHeight={logosMaxHeight} />
      ))}
    </BrandLogos.ImagesContainer>
  </BrandLogos>
);

export const Playground = Template.bind({});
Playground.args = {
  logos: Array(8).fill('https://avatars0.githubusercontent.com/u/67131017?s=200'),
  backgroundColor: 'background-page',
  logosMaxHeight: '12.5rem',
  label: 'Title',
  subLabel: 'Description',
};
