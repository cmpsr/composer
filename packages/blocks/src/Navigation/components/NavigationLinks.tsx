import React, { FC, Fragment, PropsWithChildren, ReactNode } from 'react';
import { Box, Divider, Flex, IconButton, IconMenu2, IconX, Link, Text, useDisclosure } from '@cmpsr/components';
import { useNavigationContext } from './NavigationContext';
import { NavigationLinkProps } from '../types';

export interface NavigationLinksProps extends PropsWithChildren<{}> {
  actions?: ReactNode;
  image?: ReactNode;
}

export const NavigationLinks: FC<NavigationLinksProps> = ({ actions, image, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showBaseNavigation } = useNavigationContext();

  return showBaseNavigation ? (
    <>
      <IconButton icon={<IconMenu2 />} aria-label="Hamburger menu button" variant="ghost" size="l" onClick={onOpen} />
      {image}
      {isOpen && (
        <Flex
          width="100%"
          height="100%"
          bg="background-overlay"
          position="fixed"
          top="0"
          left="0"
          zIndex="1"
          flexDirection="column"
        >
          <Box pt="0.75rem" px="1rem">
            <IconButton
              icon={<IconX />}
              aria-label="Close hamburguer menu button"
              variant="ghost"
              size="l"
              onClick={onClose}
            />
          </Box>
          <Flex
            height="100%"
            width="100%"
            px="1.5rem"
            pt="3.5rem"
            pb="3.25rem"
            alignItems="center"
            flexDirection="column"
            overflow="auto"
          >
            {children}
            {actions}
          </Flex>
        </Flex>
      )}
    </>
  ) : (
    <Flex maxWidth="80rem" margin="0 auto" alignItems="center" justifyContent="space-between" width="100%">
      <Flex gap={{ lg: '2.75rem', xxl: '4.5rem' }}>
        {image}
        <Flex gap={{ lg: '1.5rem', xl: '2.25rem', xxl: '5rem' }}>{children}</Flex>
      </Flex>
      {actions}
    </Flex>
  );
};

export const NavigationLink: FC<NavigationLinkProps> = ({ showDivider, children, ...props }) => {
  const { showBaseNavigation } = useNavigationContext();

  return showBaseNavigation ? (
    <Fragment>
      <Link size="l" {...props}>
        <Text variant="text-body-display-L" color="text-link-secondary-default">
          {children}
        </Text>
      </Link>
      {showDivider && <Divider my="1.75rem" maxWidth="24.75rem" />}
    </Fragment>
  ) : (
    <Link size="m" color="text-link-secondary-default" {...props}>
      {children}
    </Link>
  );
};
