import React, { FC } from 'react';
import {
  Flex,
  Grid,
  Image,
  Text,
  TextPairing,
  TextPairingVariant,
  textPairingVariants,
  TextVariant,
  textVariants,
} from '@cmpsr/components';

import { BrandLogosProps } from './types';

export const BrandLogos: FC<BrandLogosProps> = ({
  backgroundColor = 'background-page',
  title,
  description,
  logos,
  textVariant,
}) => (
  <Flex
    data-testid="brand-logos"
    bg={backgroundColor}
    flexDirection="column"
    alignItems="center"
    py={{ base: '3.5rem', md: '4rem', lg: '5.5rem', xl: '7rem' }}
    px={{ base: '2rem' }}
    gap={{ base: '2rem', md: '2.75rem', lg: '4.75rem' }}
  >
    {title && description ? (
      <TextPairing
        {...(textPairingVariants.includes(textVariant as TextPairingVariant) && {
          variant: textVariant as TextPairingVariant,
        })}
        label={title}
        subLabel={description}
      />
    ) : title || description ? (
      <Text
        {...(textVariants.includes(textVariant as TextVariant) && {
          variant: textVariant as TextVariant,
        })}
      >
        {title || description}
      </Text>
    ) : null}
    <Grid
      spacingY={{ base: '4rem', lg: '3.75px', xl: '3.5rem' }}
      spacingX={{ base: '2rem', md: '2.75rem', lg: '4.5rem', xl: '7rem' }}
      columns={{ base: 2, lg: 4 }}
      justifyItems="center"
    >
      {logos.map((logo, i) => (
        <Image
          key={i}
          src={logo}
          alt={`Brand logo ${i}`}
          width="100%"
          maxWidth={{ base: '10rem', md: '11.25rem', xl: '12.5rem' }}
        />
      ))}
    </Grid>
  </Flex>
);
