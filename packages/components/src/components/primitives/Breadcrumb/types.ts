export {
  BreadcrumbProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbSeparatorProps,
} from '@chakra-ui/react';
import {
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbSeparatorProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export interface BreadcrumbStaticMembers {
  Item: FC<BreadcrumbItemProps>;
  Link: FC<BreadcrumbLinkProps>;
  Separator: FC<BreadcrumbSeparatorProps>;
}
