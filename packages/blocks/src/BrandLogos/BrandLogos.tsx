import React, { FC } from 'react';
import {
  Flex,
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
  logosMaxHeight,
}) => (
  <Flex
    data-testid="cmpsr.component.brand-logos"
    bg={backgroundColor}
    flexDirection="column"
    alignItems="center"
    py={{ base: '3.5rem', md: '4rem', lg: '5.5rem', xl: '7rem' }}
    px="2rem"
    gap={{ base: '2rem', md: '2.75rem', lg: '4.75rem' }}
  >
    {title && description ? (
      <TextPairing
        {...(textPairingVariants.includes(textVariant as TextPairingVariant) && {
          variant: textVariant as TextPairingVariant,
        })}
        label={title}
        subLabel={description}
        textAlign="center"
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
    <Flex
      columnGap={{ base: '4rem', lg: '3.75rem', xl: '3.5rem' }}
      rowGap={{ base: '2rem', md: '2.75rem', lg: '4.5rem', xl: '7rem' }}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      maxWidth="76.75rem"
    >
      {logos.map((logo, i) => (
        <Image
          maxHeight={logosMaxHeight}
          key={i}
          src={logo}
          alt={`Brand logo ${i}`}
          maxWidth={{ base: '10rem', md: '11.25rem', xl: '12.5rem' }}
        />
      ))}
    </Flex>
  </Flex>
);
