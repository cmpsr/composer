import React, { FC } from 'react';
import { Flex, Image, FlexProps, Text, TextProps, Divider, LinkProps, Link } from '@cmpsr/components';

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

Testimonial.Image = Image;

const FlexContent = (props: FlexProps) => (
  <Flex gap="1.5rem" flexDirection="column" maxWidth={{ lg: '36.8125rem', xl: '33.5rem', xxl: '43.5rem' }} {...props} />
);
Testimonial.Content = FlexContent;

const TestimonialLegend = (props: TextProps) => (
  <Flex flexDirection="column" gap="0.75rem" alignSelf="start">
    <Text as="h3" variant={{ base: 'text-header-S', lg: 'text-header-XS' }} {...props} />
    <Divider />
  </Flex>
);
Testimonial.Overline = TestimonialLegend;

const TestimonialTestimony = (props: TextProps) => (
  <Text variant={{ base: 'text-body-display-M', lg: 'text-body-display-L' }} {...props} />
);
Testimonial.Testimony = TestimonialTestimony;

const TestimonialAuthor = (props: TextProps) => <Text variant="text-body-medium" {...props} />;
Testimonial.Author = TestimonialAuthor;

const TestimonialAction = (props: LinkProps) => <Link target="_blank" size="s" {...props} />;
Testimonial.Action = TestimonialAction;
