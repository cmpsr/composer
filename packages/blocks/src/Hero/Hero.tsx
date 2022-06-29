import React, { FC } from 'react';
import {
  Flex,
  Link,
  TextPairing,
  Image,
  ImageProps,
  FlexProps,
  TextPairingProps,
  LinkProps,
  TagProps,
  Tag,
  Text,
  TextProps,
} from '@cmpsr/components';

import { MediaBlock } from '../MediaBlock';
import { HeroProps, HeroStaticMembers, HeroContentProps } from './types';

export const Hero: FC<HeroProps> & HeroStaticMembers = (props) => (
  <Flex
    backgroundColor={props.backgroundColor ?? 'background-page'}
    flexDirection={{ base: 'column', lg: 'row' }}
    gap={{ lg: '2.75rem' }}
    alignItems="center"
    justifyContent="center"
    {...props}
  />
);

const HeroImage: FC<ImageProps> = (props) => <Image width="100%" {...props} />;
Hero.Image = HeroImage;

const HeroContent: FC<HeroContentProps> = ({ contentAlignment = 'start', ...rest }) => (
  <Flex
    flexDirection="column"
    px={{ base: '1.5rem', lg: 0 }}
    pt={{ base: '2rem', md: '2.75rem', lg: '5.75rem' }}
    pb={{ base: '2.75rem', lg: '5.75rem' }}
    gap="2rem"
    alignItems={contentAlignment}
    textAlign={contentAlignment}
    maxWidth={{ lg: '24.375rem', xl: '32.125rem' }}
    {...rest}
  />
);
Hero.Content = HeroContent;

const HeroTextPairing: FC<TextPairingProps> = (props) => <TextPairing {...props} />;
Hero.TextPairing = HeroTextPairing;

const HeroLinkGroup: FC<FlexProps> = (props) => (
  <Flex gap="1rem" flexDirection={{ base: 'column', md: 'row' }} {...props} />
);
Hero.LinkGroup = HeroLinkGroup;

const HeroLink: FC<LinkProps> = (props) => <Link target="_blank" size="l" {...props} />;
Hero.Link = HeroLink;

const HeroTag: FC<TagProps> = (props) => <Tag size="m" alignSelf="start" {...props} />;
Hero.Tag = HeroTag;

const HeroContentGroup: FC<FlexProps> = (props) => <Flex gap="1rem" flexDirection="column" {...props} />;
Hero.ContentGroup = HeroContentGroup;

const HeroDisclaimer: FC<TextProps> = (props) => (
  <Text color="text-secondary" variant="text-body-meta-regular" {...props} />
);
Hero.Disclaimer = HeroDisclaimer;

const HeroLegend: FC<TextProps> = (props) => (
  <Text color="text-secondary" variant="text-header-L" textTransform="uppercase" {...props} />
);
Hero.Legend = HeroLegend;

Hero.MediaBlock = MediaBlock;
