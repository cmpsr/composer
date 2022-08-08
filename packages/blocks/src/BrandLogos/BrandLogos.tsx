import React, { FC } from 'react';
import { Flex, Image, Text, TextPairing, FlexProps, ImageProps } from '@cmpsr/components';

import { BrandLogosType } from './types';

export const BrandLogos: BrandLogosType = (props) => (
  <Flex
    data-testid="cmpsr.component.brand-logos"
    backgroundColor={props.backgroundColor ?? 'background-page'}
    flexDirection="column"
    alignItems="center"
    py={{ base: '3.5rem', md: '4rem', lg: '5.5rem', xl: '7rem' }}
    px="2rem"
    gap={{ base: '2rem', md: '2.75rem', lg: '4.75rem' }}
    {...props}
  />
);

const BrandLogosImagesContainer: FC<FlexProps> = (props) => (
  <Flex
    columnGap={{ base: '4rem', lg: '3.75rem', xl: '3.5rem' }}
    rowGap={{ base: '2rem', md: '2.75rem', lg: '4.5rem', xl: '7rem' }}
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap"
    maxWidth="76.75rem"
    {...props}
  />
);
BrandLogos.ImagesContainer = BrandLogosImagesContainer;

const BrandLogosImage: FC<ImageProps> = (props) => (
  <Image maxWidth={{ base: '10rem', md: '11.25rem', xl: '12.5rem' }} {...props} />
);
BrandLogos.Image = BrandLogosImage;
BrandLogos.TextPairing = TextPairing;
BrandLogos.Text = Text;
