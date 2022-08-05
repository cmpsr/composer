import React, { FC } from 'react';
import { Flex, FlexProps, Link, LinkProps, useBreakpointValue } from '@cmpsr/components';

export const NavigationActions: FC<FlexProps> = (props) => (
  <Flex
    flexDirection={{ base: 'column', md: 'row' }}
    gap={{ base: '1.5rem', lg: '0.75rem' }}
    pt={{ base: '7rem', md: '5.75rem', lg: 0 }}
    {...props}
  />
);

export const NavigationAction: FC<LinkProps> = ({ size: givenSize, ...props }) => {
  const size = givenSize || useBreakpointValue({ base: 'l', lg: 'm' }, 'base');
  return <Link size={size} {...props} />;
};
