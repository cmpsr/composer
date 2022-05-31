import React, { FC, Fragment, useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Image,
  IconButton,
  IconMenu2,
  IconX,
  useDisclosure,
  Link,
  Text,
  Divider,
  useBreakpointValue,
} from '@cmpsr/components';
import { NavigationProps } from './types';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export const Navigation: FC<NavigationProps> = ({ sticky = false, ...props }) => {
  const showBaseNavigation = useBreakpointValue({ base: true, lg: false });
  const scrollPosition = useScrollPosition();

  return (
    <Flex
      as="nav"
      bg="background-page"
      py={{ base: '0.75rem', lg: '1.5rem' }}
      px={{ base: '1rem', lg: '2.75rem' }}
      alignItems="center"
      gap="0.75rem"
      minHeight={{ base: '4.75rem', lg: '5rem' }}
      {...(sticky && scrollPosition && { position: 'sticky', top: 0, boxShadow: 'elevation-interactive' })}
    >
      {showBaseNavigation ? <BaseNavigation {...props} /> : <DesktopNavigation {...props} />}
    </Flex>
  );
};

const BaseNavigation = ({ actions, anchors, logoUrl }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton icon={<IconMenu2 />} variant="ghost" size="l" onClick={onOpen} />
      <Image src={logoUrl} alt="navigation logotype" height="32px" />
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
            <IconButton icon={<IconX />} variant="ghost" size="l" onClick={onClose} />
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
            {anchors.map(({ label, href }, i: number) => (
              <Fragment key={i}>
                <Link href={href} size="l">
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

const DesktopNavigation = ({ actions, anchors, logoUrl }) => (
  <Flex maxWidth="80rem" margin="0 auto" alignItems="center" justifyContent="space-between" width="100%">
    <Flex gap={{ lg: '2.75rem', xxl: '4.5rem' }}>
      <Image src={logoUrl} alt="navigation logotype" height="32px" />
      <Flex gap={{ lg: '1.5rem', xl: '2.25rem', xxl: '5rem' }}>
        {anchors.map(({ label, href }, i: number) => (
          <Link href={href} size="m" key={i} color="text-link-secondary-default">
            {label}
          </Link>
        ))}
      </Flex>
    </Flex>
    {actions}
  </Flex>
);
