import React, { FC } from 'react';
import { Flex, Link } from '@cmpsr/components';
import { NavigationProps } from './types';
import { LogoNavigation } from './LogoNavigation';

export const DesktopNavigation: FC<Omit<NavigationProps, 'sticky'>> = ({ actions, anchors, logoUrl, logoHref }) => (
  <Flex
    data-testid="desktop-navigation"
    maxWidth="80rem"
    margin="0 auto"
    alignItems="center"
    justifyContent="space-between"
    width="100%"
  >
    <Flex gap={{ lg: '2.75rem', xxl: '4.5rem' }}>
      <LogoNavigation logoHref={logoHref} logoUrl={logoUrl} />
      <Flex gap={{ lg: '1.5rem', xl: '2.25rem', xxl: '5rem' }}>
        {anchors.map(({ label, href, ...rest }, i: number) => (
          <Link href={href} size="m" key={i} color="text-link-secondary-default" {...rest}>
            {label}
          </Link>
        ))}
      </Flex>
    </Flex>
    {actions}
  </Flex>
);
