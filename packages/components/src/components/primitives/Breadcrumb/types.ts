import { SpaceProps } from '@chakra-ui/react';
import { FC } from 'react';
import { IconProps, TextProps } from '..';
import { FlexProps } from '../../layouts';

export interface BreadcrumbItem {
  text: string;
  href?: string;
  leadingIcon?: FC<IconProps>;
  trailingIcon?: FC<IconProps>;
}

export interface BreadcrumbProps extends SpaceProps {
  items: BreadcrumbItem[];
  separator?: string | React.ReactElement;
}

export interface BreadcrumbStyle {
  container: FlexProps;
  separator: TextProps;
  separatorIcon: IconProps;
  lastItem: TextProps;
}
