import React, { FC } from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbSeparator as ChakraBreadcrumbSeparator,
} from '@chakra-ui/react';
import {
  BreadcrumbProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbSeparatorProps,
  BreadcrumbStaticMembers,
} from './types';

export const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbStaticMembers = (
  props
) => <ChakraBreadcrumb {...props} />;

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, ...rest }) => {
  // const test = React.Children.toArray(children).filter((child) => {
  //   console.log('element', child);
  //   console.log('valid', React.isValidElement(child));
  // });

  return <ChakraBreadcrumbItem {...rest}>{children}</ChakraBreadcrumbItem>;
};

const BreadcrumbLink: FC<BreadcrumbLinkProps> = (props) => {
  // console.log('link', props);
  return <ChakraBreadcrumbLink {...props} />;
};

const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = (props) => (
  <ChakraBreadcrumbSeparator {...props} />
);

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.Separator = BreadcrumbSeparator;
