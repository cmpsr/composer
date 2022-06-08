import React, { FC } from 'react';
import { Flex, Link, TextPairing, Image } from '@cmpsr/components';

import { HeroProps } from './types';

export const Hero: FC<HeroProps> = ({
  backgroundColor = 'background-page',
  title,
  description,
  primaryCta,
  secondaryCta,
  contentAlignment,
  imageUrl,
  imagePosition = 'right',
  imageProps,
  textPairingVariant = 'textpairing-header-4XL',
}) => (
  <Flex
    backgroundColor={backgroundColor}
    flexDirection={{ base: 'column', lg: imagePosition === 'right' ? 'row-reverse' : 'row' }}
    gap={{ lg: '2.75rem' }}
    alignItems="center"
    justifyContent="center"
  >
    <Image src={imageUrl} alt="hero image" width="100%" {...imageProps} />
    <Flex
      flexDirection={{ base: 'column' }}
      px={{ base: '1.5rem', lg: 0 }}
      pt={{ base: '2rem', md: '2.75rem', lg: '5.75rem' }}
      pb={{ base: '2.75rem', lg: '5.75rem' }}
      gap="2rem"
      alignItems={contentAlignment}
      maxWidth={{ lg: '24.375rem', xl: '32.125rem' }}
    >
      <TextPairing variant={textPairingVariant} label={title} subLabel={description} textAlign={contentAlignment} />
      {(primaryCta?.copy || secondaryCta?.copy) && (
        <Flex gap="1rem" flexDirection={{ base: 'column', md: 'row' }}>
          {primaryCta?.copy && (
            <Link variant={primaryCta.variant || 'primary'} href={primaryCta.href} target="_blank" size="l">
              {primaryCta.copy}
            </Link>
          )}
          {secondaryCta?.copy && (
            <Link variant={secondaryCta.variant || 'primary-alt'} href={secondaryCta.href} target="_blank" size="l">
              {secondaryCta.copy}
            </Link>
          )}
        </Flex>
      )}
    </Flex>
  </Flex>
);
