import React, { FC } from 'react';
import { Divider, DividerProps, Flex, Image, ImageProps, Link, Text } from '@cmpsr/components';

import { FooterProps, FooterStaticMembers } from './types';

export const Footer: FC<FooterProps> & FooterStaticMembers = ({
  linkGroups,
  copyGroup,
  dividerProps,
  children,
  ...props
}) => (
  <Flex maxWidth="66.75rem" flexDirection="column" width="100%" {...props}>
    {children}
    <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: '2.75rem', md: '3rem' }}>
      <Flex gap={{ base: '2.75rem', lg: '1.5rem' }} flexDirection={{ base: 'column', md: 'row' }} flex={{ lg: 1 }}>
        {linkGroups?.map(({ title, items }, i) => (
          <Flex flexDirection="column" gap="1.25rem" flex={1} key={i}>
            <Text variant="text-body-bold">{title}</Text>
            <Flex flexDirection="column" gap="0.75rem" alignItems="start">
              {items?.map((item, i) => (
                <Link key={i} size="m" color="text-link-secondary-default" {...item} />
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
      {copyGroup}
    </Flex>
  </Flex>
);

const FooterLogo: FC<ImageProps> = (props) => (
  <Image alt="Footer image" width="100%" mb={{ base: '2.75rem', md: '3rem' }} {...props} />
);
Footer.Logo = FooterLogo;

const FooterBottom: FC<DividerProps> = ({ children, ...props }) => (
  <>
    <Divider width="100%" my={{ base: '2.75rem', md: '4rem' }} {...props} />
    {children}
  </>
);
Footer.Bottom = FooterBottom;
