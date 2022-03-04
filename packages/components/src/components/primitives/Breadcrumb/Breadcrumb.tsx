import React, { cloneElement } from 'react';
import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, BreadcrumbLink, forwardRef } from '@chakra-ui/react';
import { IconChevronRight, Link, Text } from '@components';
import { BreadcrumbItemProps, BreadcrumbProps } from './types';

const Breadcrumb = forwardRef<BreadcrumbProps, typeof ChakraBreadcrumb>(
  ({ separator = <IconChevronRight size="m" color="text-secondary" />, ...rest }, ref) => (
    <ChakraBreadcrumb ref={ref} separator={separator} spacing="0.5rem" {...rest} />
  )
);

const Item = forwardRef<BreadcrumbItemProps, typeof BreadcrumbItem>(
  ({ isLastChild, href, separator, spacing, 'data-testid': testId, ...rest }, ref) => (
    <BreadcrumbItem ref={ref} data-testid={testId}>
      {isLastChild ? (
        <Text color="inherit">{rest.children}</Text>
      ) : (
        <>
          <BreadcrumbLink href={href}>
            <Link size="m" as="span" {...rest} />
          </BreadcrumbLink>
          {typeof separator === 'string' ? (
            <Text mx={spacing}>{separator}</Text>
          ) : (
            cloneElement(separator, {
              mx: spacing,
            })
          )}
        </>
      )}
    </BreadcrumbItem>
  )
);

const BreadcrumbNamespace = Object.assign(Breadcrumb, { Item });
export { BreadcrumbNamespace as Breadcrumb };
