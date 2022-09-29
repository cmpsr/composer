import React from 'react';
import { Meta } from '@storybook/react';

import { BrandLogos } from './BrandLogos';

export default {
  component: BrandLogos,
  title: 'Blocks/BrandLogos',
} as Meta;

export const WithText = () => (
  <BrandLogos backgroundColor="background-page">
    <BrandLogos.Title variant="textpairing-header-2XL">
      <BrandLogos.Title.Label>Title</BrandLogos.Title.Label>
    </BrandLogos.Title>
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
    <BrandLogos.Title variant="textpairing-header-2XL" textAlign="center">
      <BrandLogos.Title.Label>Title</BrandLogos.Title.Label>
      <BrandLogos.Title.SubLabel>Description</BrandLogos.Title.SubLabel>
    </BrandLogos.Title>
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
    <BrandLogos.Title variant="textpairing-header-2XL" textAlign="center">
      <BrandLogos.Title.Label>{label}</BrandLogos.Title.Label>
      <BrandLogos.Title.SubLabel>{subLabel}</BrandLogos.Title.SubLabel>
    </BrandLogos.Title>
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
