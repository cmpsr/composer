import React, { FC } from 'react';
import { Flex, Link, TextPairing, FlexProps, LinkProps, Text, TextProps } from '@cmpsr/components';

import { HighlightedTextType } from './types';

export const HighlightedText: HighlightedTextType = ({
  backgroundColor = 'background-page',
  contentAlignment = 'start',
  ...rest
}) => (
  <Flex
    backgroundColor={backgroundColor}
    flexDirection="column"
    gap={{ base: '0.75rem', lg: '1rem' }}
    px={{ base: '1.25rem', md: '1.5rem', lg: '3rem', xl: '6rem', xxl: '7rem' }}
    py={{ base: '2.5rem', md: '4rem', lg: '5rem', xl: '5.5rem', xxl: '6rem' }}
    alignItems={contentAlignment}
    textAlign={contentAlignment}
    {...rest}
  />
);

HighlightedText.TextPairing = TextPairing;

const HighlightedTextLinkGroup: FC<FlexProps> = (props) => (
  <Flex
    gap={{ base: '1rem', md: '1.5rem' }}
    flexDirection={{ base: 'column', md: 'row' }}
    mt={{ base: '0.75rem', lg: '1rem', xl: '2rem' }}
    width={{ base: '100%', md: 'unset' }}
    {...props}
  />
);
HighlightedText.LinkGroup = HighlightedTextLinkGroup;

const HighlightedTextLink: FC<LinkProps> = (props) => (
  <Link target="_blank" size="l" justifyContent={{ base: 'center' }} {...props} />
);
HighlightedText.Link = HighlightedTextLink;

const HighlightedTextLegend: FC<TextProps> = (props) => (
  <Text color="text-secondary" variant="text-body-display-S" textTransform="uppercase" {...props} />
);
HighlightedText.Legend = HighlightedTextLegend;
