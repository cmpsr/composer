import React, { FC } from 'react';
import { Divider, Flex, Image, Link, Text } from '@cmpsr/components';

import { FooterProps } from './types';

export const Footer: FC<FooterProps> = ({
  backgroundColor = 'background-action-default',
  imageProps,
  linkGroups,
  copyGroup,
  bottomContent,
  dividerProps,
}) => (
  <Flex
    backgroundColor={backgroundColor}
    px={{ base: '1.5rem', lg: '2.75rem' }}
    py={{ base: '3.5rem', md: '5.5rem', xl: '5.75rem' }}
    justifyContent="center"
  >
    <Flex maxWidth="66.75rem" flexDirection="column" width="100%">
      <Image alt="Footer image" width="100%" mb={{ base: '2.75rem', md: '3rem' }} {...imageProps} />
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
      {bottomContent && (
        <>
          <Divider width="100%" my={{ base: '2.75rem', md: '4rem' }} {...dividerProps} />
          {bottomContent}
        </>
      )}
    </Flex>
  </Flex>
);
