import React from 'react';
import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, BreadcrumbLink, forwardRef } from '@chakra-ui/react';
import { IconChevronRight, Link, Text } from '@components';
import { BreadcrumbItemProps, BreadcrumbProps } from './types';

const Breadcrumb = forwardRef<BreadcrumbProps, typeof ChakraBreadcrumb>(
  ({ separator = <IconChevronRight size="m" color="text-secondary" />, ...rest }, ref) => (
    <ChakraBreadcrumb ref={ref} separator={separator} {...rest} />
  ),
);

const Item = forwardRef<BreadcrumbItemProps, typeof BreadcrumbItem>(
  ({ isLastChild, href, separator, testId, ...rest }, ref) => (
    <BreadcrumbItem ref={ref} data-testid={testId} separator={separator} isLastChild={isLastChild}>
      {isLastChild ? (
        <Text color="inherit" variant="text-body-medium">
          {rest.children}
        </Text>
      ) : (
        <BreadcrumbLink href={href}>
          <Link size="m" as="span" {...rest} />
        </BreadcrumbLink>
      )}
    </BreadcrumbItem>
  ),
);

const BreadcrumbNamespace = Object.assign(Breadcrumb, { Item });
export { BreadcrumbNamespace as Breadcrumb };
