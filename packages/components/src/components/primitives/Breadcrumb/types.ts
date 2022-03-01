import { SpaceProps, StyleProps } from '@chakra-ui/react';
import { FC } from 'react';
import { IconProps, LinkProps, TextProps } from '..';
import { FlexProps } from '../../layouts';

// export interface BreadcrumbItem {
//   text: string;
//   href?: string;
//   leadingIcon?: FC<IconProps>;
//   trailingIcon?: FC<IconProps>;
// }

export interface BreadcrumbItem extends TextProps {
  isLastChild: boolean
  separator?: Separator
}
type Separator = string | React.ReactElement;

export interface BreadcrumbProps extends SpaceProps {
  // items: BreadcrumbItem[];
  separator?: Separator
}

export interface BreadcrumbStyle {
  container: FlexProps;
  separator: StyleProps;
  // separatorIcon: IconProps;
  lastItem: StyleProps;
}

export interface BreadcrumbStaticMembers {
  Item: FC<BreadcrumbItem>
}
