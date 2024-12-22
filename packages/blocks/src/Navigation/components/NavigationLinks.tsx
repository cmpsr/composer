import React, { FC, Fragment, ReactNode, cloneElement, isValidElement, Children } from 'react';
import { Box, Divider, Flex, IconButton, IconMenu2, IconX, Link, Text, useDisclosure } from '@cmpsr/components';
import { useNavigationContext } from './NavigationContext';
import { NavigationLinkProps, NavigationLinksProps as INavigationLinksProps } from '../types';

export interface NavigationLinksProps extends INavigationLinksProps {
  actions?: ReactNode;
  image?: ReactNode;
}

export const NavigationLinks: FC<NavigationLinksProps> = ({
  actions,
  image,
  children,
  linksPosition = 'start',
  showDividers = true,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showBaseNavigation, keepActionsAlwaysVisible } = useNavigationContext();

  return showBaseNavigation ? (
    <>
      <IconButton icon={<IconMenu2 />} aria-label="Hamburger menu button" variant="ghost" size="l" onClick={onOpen} />
      <Flex justifyContent="space-between" flexBasis="100%" gap="0.75rem">
        {image}
        {keepActionsAlwaysVisible && actions}
      </Flex>
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
          {...props}
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
            {Children.map(
              children,
              (child, index) =>
                isValidElement(child) &&
                cloneElement(child, {
                  showDivider: index === Children.count(children) - 1 ? false : showDividers,
                } as NavigationLinkProps),
            )}
            {!keepActionsAlwaysVisible && actions}
          </Flex>
        </Flex>
      )}
    </>
  ) : (
    <Flex maxWidth="80rem" margin="0 auto" alignItems="center" width="100%" {...props}>
      <Box flexShrink="0">{image}</Box>
      <Flex
        flexBasis="100%"
        mx={{ lg: '2.75rem', xxl: '4.5rem' }}
        gap={{ lg: '1.5rem', xl: '2.25rem', xxl: '5rem' }}
        justifyContent={linksPosition}
      >
        {children}
      </Flex>
      <Box flexShrink="0">{actions}</Box>
    </Flex>
  );
};

export const NavigationLink: FC<NavigationLinkProps> = ({ showDivider, children, ...props }) => {
  const { showBaseNavigation } = useNavigationContext();

  return showBaseNavigation ? (
    <Fragment>
      <Link size="l" justifyContent="center" marginBottom={!showDivider && '3rem'} variant="link-secondary" {...props}>
        <Text variant="text-body-display-L" color="unset">
          {children}
        </Text>
      </Link>
      {showDivider && <Divider my="1.50rem" maxWidth="24.75rem" />}
    </Fragment>
  ) : (
    <Link size="m" variant="link-secondary" {...props}>
      {children}
    </Link>
  );
};
