import React, { FC } from 'react';
import { Flex, Image, Text, Divider, Link } from '@cmpsr/components';

import { TestimonialProps } from './types';

export const Testimonial: FC<TestimonialProps> = ({
  backgroundColor = 'background-page',
  imageUrl,
  legend,
  testimony,
  testimonyTextVariant,
  name,
  association,
  link,
}) => (
  <Flex
    data-testid="testimonial"
    backgroundColor={backgroundColor}
    px={{ base: '1.5rem', lg: '2.75rem', xl: '6.625rem' }}
    py={{ base: '3.5rem', md: '5.5rem', xl: '7rem' }}
    gap={{ base: '1.5rem', lg: '2rem' }}
    flexDirection={{ base: 'column', lg: 'row' }}
    alignItems={{ lg: 'center' }}
    justifyContent={{ lg: 'center' }}
  >
    <Image
      src={imageUrl}
      alt="testimony image"
      maxWidth={{ md: '34.75rem', lg: '19.6875rem', xl: '31.25rem' }}
      width={{ base: '100%' }}
      borderRadius="0.375rem"
      alignSelf={{ md: 'center' }}
    />
    <Flex
      gap={{ base: '1.5rem' }}
      flexDirection="column"
      maxWidth={{ lg: '36.8125rem', xl: '33.5rem', xxl: '43.5rem' }}
    >
      {legend && (
        <Flex flexDirection="column" gap="0.75rem" alignSelf="start">
          <Text variant={{ base: 'text-header-S', lg: 'text-header-XS' }}>{legend}</Text>
          <Divider />
        </Flex>
      )}
      <Text variant={testimonyTextVariant ?? { base: 'text-body-display-M', lg: 'text-body-display-L' }}>
        {testimony}
      </Text>
      <Flex gap={{ base: '0.5rem' }} flexWrap="wrap">
        <Text variant="text-body-medium">{name}</Text>
        {association && (
          <Flex gap={{ base: '0.5rem' }}>
            <Divider orientation="vertical" />
            <Text variant="text-body-regular" color="text-secondary">
              {association}
            </Text>
          </Flex>
        )}
      </Flex>
      {link && (
        <Link href={link.href} target="_blank" size="s">
          {link.label}
        </Link>
      )}
    </Flex>
  </Flex>
);
