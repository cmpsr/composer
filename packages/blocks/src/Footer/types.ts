import { ReactNode } from 'react';
import { DividerProps, ImageProps, LinkProps, Theme } from '@cmpsr/components';

export interface FooterProps {
  backgroundColor?: ThisType<Theme['colors']>;
  imageProps: ImageProps;
  linkGroups: Array<{ title: string; items: Array<LinkProps> }>;
  copyGroup?: ReactNode;
  bottomContent?: ReactNode;
  dividerProps?: DividerProps;
}
