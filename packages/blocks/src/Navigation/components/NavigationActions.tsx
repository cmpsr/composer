import React, { FC } from 'react';
import { Flex, FlexProps, Link, LinkProps, LinkSize, useBreakpointValue } from '@cmpsr/components';
import { useNavigationContext } from './NavigationContext';

export const NavigationActions: FC<FlexProps> = (props) => {
  const { keepActionsAlwaysVisible } = useNavigationContext();

  const keepActionsAlwaysVisibleOverrideProps: FlexProps = keepActionsAlwaysVisible
    ? { flexDirection: { base: 'row' }, pt: 0 }
    : {};

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: '1.5rem', lg: '0.75rem' }}
      pt={{ base: '7rem', md: '5.75rem', lg: 0 }}
      {...keepActionsAlwaysVisibleOverrideProps}
      {...props}
    />
  );
};

export const NavigationAction: FC<LinkProps> = ({ size: givenSize, ...props }) => {
  const { keepActionsAlwaysVisible } = useNavigationContext();

  const size: LinkSize =
    givenSize || keepActionsAlwaysVisible ? 'm' : useBreakpointValue({ base: 'l', lg: 'm' }, 'base');
  return <Link size={size} {...props} />;
};
