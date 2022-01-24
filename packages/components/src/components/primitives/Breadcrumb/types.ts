import {
  BreadcrumbProps as ChakraBreadcrumbProps,
  BreadcrumbItemProps as ChakraBreadcrumbItemProps,
  BreadcrumbLinkProps as ChakraBreadcrumbLinkProps,
  BreadcrumbSeparatorProps as ChakraBreadcrumbSeparatorProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export interface BreadcrumbProps extends ChakraBreadcrumbProps {
  variant?: string;
}

export type BreadcrumbItemProps = ChakraBreadcrumbItemProps;
export type BreadcrumbLinkProps = ChakraBreadcrumbLinkProps;
export type BreadcrumbSeparatorProps = ChakraBreadcrumbSeparatorProps;

export interface BreadcrumbStaticMembers {
  Item: FC<BreadcrumbItemProps>;
  Link: FC<BreadcrumbLinkProps>;
  Separator: FC<BreadcrumbSeparatorProps>;
}
