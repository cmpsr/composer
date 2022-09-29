import React, { FC } from 'react';
import {
  Divider,
  DividerProps,
  Flex,
  FlexProps,
  Image,
  ImageProps,
  Link,
  LinkProps,
  Text,
  TextProps,
} from '@cmpsr/components';

import { FooterContentStaticMembers, FooterLinkGroupStaticMember, FooterProps, FooterStaticMembers } from './types';

export const Footer: FC<FooterProps> & FooterStaticMembers = (props) => (
  <Flex maxWidth="66.75rem" flexDirection="column" width="100%" {...props} />
);

const FooterLogo: FC<ImageProps> = (props) => (
  <Image alt="Footer image" width="100%" mb={{ base: '2.75rem', md: '3rem' }} {...props} />
);
Footer.Logo = FooterLogo;

const FooterColumnTitle: FC<TextProps> = (props) => <Text variant="text-body-bold" mb="0.5rem" {...props} />;
const FooterColumnAction: FC<LinkProps> = (props) => <Link size="m" color="text-link-secondary-default" {...props} />;
const FooterContentColumn: FC<FlexProps> & FooterLinkGroupStaticMember = (props) => (
  <Flex flexDirection="column" gap="0.75rem" flex={1} {...props} />
);
const FooterContentColumnsContainer: FC<FlexProps> = (props) => (
  <Flex
    gap={{ base: '2.75rem', lg: '1.5rem' }}
    flexDirection={{ base: 'column', md: 'row' }}
    flex={{ lg: 1 }}
    {...props}
  />
);
FooterContentColumn.Title = FooterColumnTitle;
FooterContentColumn.Action = FooterColumnAction;
const FooterContent: FC<FlexProps> & FooterContentStaticMembers = (props) => (
  <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: '2.75rem', md: '3rem' }} {...props} />
);
FooterContent.ColumnsContainer = FooterContentColumnsContainer;
FooterContent.Column = FooterContentColumn;
FooterContent.CopyGroup = Flex;
Footer.Content = FooterContent;

const FooterBottom: FC<DividerProps> = ({ children, ...props }) => (
  <>
    <Divider width="100%" my={{ base: '2.75rem', md: '4rem' }} {...props} />
    {children}
  </>
);
Footer.Bottom = FooterBottom;
