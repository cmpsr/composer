import React, { FC } from 'react';
import { Flex, Image, ImageProps, FlexProps } from '@cmpsr/components';

import { TestimonialProps, TestimonialStaticMembers } from './types';

export const Testimonial: FC<TestimonialProps> & TestimonialStaticMembers = ({
  backgroundColor = 'background-page',
  ...flexProps
}) => (
  <Flex
    backgroundColor={backgroundColor}
    px={{ base: '1.5rem', lg: '2.75rem', xl: '6.625rem' }}
    py={{ base: '3.5rem', md: '5.5rem', xl: '7rem' }}
    gap={{ base: '1.5rem', lg: '2rem' }}
    flexDirection={{ base: 'column', lg: 'row' }}
    alignItems={{ lg: 'center' }}
    justifyContent={{ lg: 'center' }}
    {...flexProps}
  />
);

const TestimonialImage: FC<ImageProps> = (props) => (
  <Image
    alt="testimony image"
    maxWidth={{ md: '34.75rem', lg: '19.6875rem', xl: '31.25rem' }}
    width={{ base: '100%' }}
    borderRadius="0.375rem"
    alignSelf={{ md: 'center' }}
    {...props}
  />
);
Testimonial.Image = TestimonialImage;

const FlexContent: FC<FlexProps> = (props) => (
  <Flex
    gap={{ base: '1.5rem' }}
    flexDirection="column"
    maxWidth={{ lg: '36.8125rem', xl: '33.5rem', xxl: '43.5rem' }}
    {...props}
  />
);
Testimonial.Content = FlexContent;
