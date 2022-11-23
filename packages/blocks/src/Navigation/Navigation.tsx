import React, { FC, cloneElement, isValidElement, Children, ReactElement } from 'react';
import { Flex, FlexProps, useBreakpointValue, useScrollPosition } from '@cmpsr/components';

import { NavigationImageProps, NavigationProps, NavigationStaticMembers } from './types';
import {
  NavigationAction,
  NavigationActions,
  NavigationLink,
  NavigationLinks,
  NavigationLinksProps,
  NavigationImage,
  NavigationProvider,
} from './components';

export const Navigation: FC<NavigationProps> & NavigationStaticMembers = ({ sticky = false, children, ...props }) => {
  const showBaseNavigation = useBreakpointValue({ base: true, lg: false });
  const scrollPosition = useScrollPosition();

  let image: ReactElement<NavigationImageProps> = null;
  let links: ReactElement<NavigationLinksProps> = null;
  let actions: ReactElement<FlexProps> = null;
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      switch (child.type) {
        case NavigationImage:
          image = child;
          break;
        case NavigationLinks:
          links = child;
          break;
        case NavigationActions:
          actions = child;
          break;
      }
    }
  });

  return (
    <NavigationProvider value={{ showBaseNavigation }}>
      <Flex
        as="nav"
        bg="background-page"
        py={{ base: '0.75rem', lg: '1.5rem' }}
        px={{ base: '1rem', lg: '2.75rem' }}
        alignItems="center"
        gap="0.75rem"
        minHeight={{ base: '4.75rem', lg: '5rem' }}
        transition="box-shadow ease-in-out .15s;"
        zIndex={1}
        {...(sticky && { position: 'sticky', top: 0 })}
        {...(scrollPosition && { boxShadow: 'elevation-interactive' })}
        {...props}
      >
        {cloneElement(links, { actions, image })}
      </Flex>
    </NavigationProvider>
  );
};

Navigation.Image = NavigationImage;
Navigation.Links = NavigationLinks;
Navigation.Link = NavigationLink;
Navigation.Actions = NavigationActions;
Navigation.Action = NavigationAction;
