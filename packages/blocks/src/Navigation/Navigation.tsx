import React, { FC } from 'react';
import { Flex, useBreakpointValue, useScrollPosition } from '@cmpsr/components';

import { NavigationProps } from './types';
import { BaseNavigation } from './BaseNavigation';
import { DesktopNavigation } from './DesktopNavigation';

export const Navigation: FC<NavigationProps> = ({ sticky = false, ...props }) => {
  const showBaseNavigation = useBreakpointValue({ base: true, lg: false });
  const scrollPosition = useScrollPosition();

  return (
    <Flex
      data-testid="navigation"
      as="nav"
      bg="background-page"
      py={{ base: '0.75rem', lg: '1.5rem' }}
      px={{ base: '1rem', lg: '2.75rem' }}
      alignItems="center"
      gap="0.75rem"
      minHeight={{ base: '4.75rem', lg: '5rem' }}
      transition="box-shadow ease-in-out .15s;"
      {...(sticky && { position: 'sticky', top: 0 })}
      {...(scrollPosition && { boxShadow: 'elevation-interactive' })}
    >
      {showBaseNavigation ? <BaseNavigation {...props} /> : <DesktopNavigation {...props} />}
    </Flex>
  );
};
