import React, { FC } from 'react';
import { Divider, DividerProps, Flex, FlexProps, Image, ImageProps, Link, LinkProps, Text } from '@cmpsr/components';

import { FooterActionsProps, FooterProps, FooterStaticMembers } from './types';

export const Footer: FC<FooterProps> & FooterStaticMembers = (props) => (
  <Flex maxWidth="66.75rem" flexDirection="column" width="100%" {...props} />
);

const FooterLogo: FC<ImageProps> = (props) => (
  <Image alt="Footer image" width="100%" mb={{ base: '2.75rem', md: '3rem' }} {...props} />
);

const FooterContent: FC<FlexProps> = (props) => (
  <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: '2.75rem', md: '3rem' }} {...props} />
);

const FooterBottom: FC<DividerProps> = ({ children, ...props }) => (
  <>
    <Divider width="100%" my={{ base: '2.75rem', md: '4rem' }} {...props} />
    {children}
  </>
);

const FooterActionsContainer: FC<FlexProps> = (props) => (
  <Flex
    gap={{ base: '2.75rem', lg: '1.5rem' }}
    flexDirection={{ base: 'column', md: 'row' }}
    flex={{ lg: 1 }}
    {...props}
  />
);

const FooterActions: FC<FooterActionsProps> = ({ children, title, ...props }) => (
  <Flex flexDirection="column" gap="0.75rem" flex={1} {...props}>
    {title && (
      <Text variant="text-body-bold" mb="0.5rem">
        {title}
      </Text>
    )}
    {children}
  </Flex>
);

const FooterAction: FC<LinkProps> = (props) => <Link size="m" color="text-link-secondary-default" {...props} />;

Footer.Logo = FooterLogo;
Footer.ActionsContainer = FooterActionsContainer;
Footer.Actions = FooterActions;
Footer.Action = FooterAction;
Footer.Bottom = FooterBottom;
Footer.CopyGroup = Flex;
Footer.Content = FooterContent;
