import React, { FC, Fragment } from 'react';
import { Flex, Box, IconButton, IconMenu2, IconX, useDisclosure, Link, Text, Divider } from '@cmpsr/components';
import { NavigationProps } from './types';
import { LogoNavigation } from './LogoNavigation';

export const BaseNavigation: FC<Omit<NavigationProps, 'sticky'>> = ({ actions, anchors, logoUrl, logoHref }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton icon={<IconMenu2 />} aria-label="Hamburger menu button" variant="ghost" size="l" onClick={onOpen} />
      <LogoNavigation logoHref={logoHref} logoUrl={logoUrl} />
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
            {anchors.map(({ label, href, ...rest }, i: number) => (
              <Fragment key={i}>
                <Link href={href} size="l" {...rest}>
                  <Text variant="text-body-display-L" color="text-link-secondary-default">
                    {label}
                  </Text>
                </Link>
                {anchors.length - 1 !== i && <Divider my="1.75rem" maxWidth="24.75rem" />}
              </Fragment>
            ))}
            {actions}
          </Flex>
        </Flex>
      )}
    </>
  );
};
