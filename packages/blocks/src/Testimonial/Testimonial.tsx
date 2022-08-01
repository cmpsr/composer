import React, { FC } from 'react';
import { Flex, Image, ImageProps, FlexProps, Text, TextProps, Divider, LinkProps, Link } from '@cmpsr/components';

import { TestimonialAuthorStaticMembers, TestimonialProps, TestimonialStaticMembers } from './types';

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
    width="100%"
    borderRadius="0.375rem"
    alignSelf={{ md: 'center' }}
    {...props}
  />
);
Testimonial.Image = TestimonialImage;

const FlexContent: FC<FlexProps> = (props) => (
  <Flex gap="1.5rem" flexDirection="column" maxWidth={{ lg: '36.8125rem', xl: '33.5rem', xxl: '43.5rem' }} {...props} />
);
Testimonial.Content = FlexContent;

const TestimonialLegend: FC<TextProps> = (props) => (
  <Flex flexDirection="column" gap="0.75rem" alignSelf="start">
    <Text as="h3" variant={{ base: 'text-header-S', lg: 'text-header-XS' }} {...props} />
    <Divider />
  </Flex>
);
Testimonial.Legend = TestimonialLegend;

const TestimonialTestimony: FC<TextProps> = (props) => (
  <Text variant={{ base: 'text-body-display-M', lg: 'text-body-display-L' }} {...props} />
);
Testimonial.Testimony = TestimonialTestimony;

const TestimonialAuthorAssociation: FC<TextProps> = (props) => (
  <Flex gap="0.5rem">
    <Divider orientation="vertical" />
    <Text variant="text-body-regular" color="text-secondary" {...props} />
  </Flex>
);
const TestimonialAuthor: FC<TextProps> & TestimonialAuthorStaticMembers = ({ children, ...props }) => (
  <Flex gap="0.5rem" flexWrap="wrap">
    {React.Children.map(children, (child) =>
      typeof child === 'string' ? <Text variant="text-body-medium" {...props} children={child} /> : child
    )}
  </Flex>
);
TestimonialAuthor.Association = TestimonialAuthorAssociation;
Testimonial.Author = TestimonialAuthor;

const TestimonialLink: FC<LinkProps> = (props) => <Link target="_blank" size="s" {...props} />;
Testimonial.Link = TestimonialLink;
