import React, { FC } from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import { BreadcrumbProps, BreadcrumbStaticMembers } from './types';

export const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbStaticMembers = (
  props
) => <ChakraBreadcrumb {...props} />;

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Separator = BreadcrumbSeparator;
