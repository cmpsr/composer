import { FC } from 'react';
import { SpaceProps } from '@chakra-ui/react';
import { LinkProps } from '@components';

type Separator = string | React.ReactElement;

export interface BreadcrumbProps extends SpaceProps {
  separator?: Separator;
}

export interface BreadcrumbItem extends LinkProps {
  isLastChild?: boolean;
  separator?: Separator;
}

export interface BreadcrumbStaticMembers {
  Item: FC<BreadcrumbItem>;
}
