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
import { IconProps } from '..';

export interface BreadcrumbItem {
  text: string;
  link?: string;
  leftIcon?: FC<IconProps>;
  rightIcon?: FC<IconProps>;
}

export interface BreadcrumbStaticMembers {
  Item: FC<BreadcrumbItemProps>;
  Link: FC<BreadcrumbLinkProps>;
  Separator: FC<BreadcrumbSeparatorProps>;
}
