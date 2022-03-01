import { FC } from 'react';
import { SpaceProps, StyleProps } from '@chakra-ui/react';
import { LinkProps, FlexProps } from '@components';

type Separator = string | React.ReactElement;

export interface BreadcrumbProps extends SpaceProps {
  separator?: Separator;
}

export interface BreadcrumbStyle {
  container: FlexProps;
  separator: StyleProps;
  lastItem: StyleProps;
}

export interface BreadcrumbItem extends LinkProps {
  isLastChild?: boolean;
  separator?: Separator;
}

export interface BreadcrumbStaticMembers {
  Item: FC<BreadcrumbItem>;
}
