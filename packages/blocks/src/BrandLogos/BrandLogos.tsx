import React, { FC } from 'react';
import { Flex, Image, Text, TextPairing, TextPairingProps, TextProps } from '@cmpsr/components';

import { BrandLogosProps } from './types';

export const BrandLogos: FC<BrandLogosProps> = ({
  backgroundColor = 'background-page',
  logos,
  logosMaxHeight,
  textProps,
}) => {
  const isTextPairing = (textProps: TextPairingProps | TextProps): textProps is TextPairingProps =>
    !!(textProps as TextPairingProps)?.labelProps;
  return (
    <Flex
      data-testid="cmpsr.component.brand-logos"
      bg={backgroundColor}
      flexDirection="column"
      alignItems="center"
      py={{ base: '3.5rem', md: '4rem', lg: '5.5rem', xl: '7rem' }}
      px="2rem"
      gap={{ base: '2rem', md: '2.75rem', lg: '4.75rem' }}
    >
      {isTextPairing(textProps) ? <TextPairing textAlign="center" {...textProps} /> : <Text {...textProps} />}
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
};
