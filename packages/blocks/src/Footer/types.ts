import { ReactNode } from 'react';
import { DividerProps, FlexProps, ImageProps, LinkProps } from '@cmpsr/components';

export interface FooterProps extends FlexProps {
  imageProps: ImageProps;
  linkGroups: Array<{ title: string; items: Array<LinkProps> }>;
  copyGroup?: ReactNode;
  bottomContent?: ReactNode;
  dividerProps?: DividerProps;
}
