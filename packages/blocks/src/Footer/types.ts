import { FC, ReactNode } from 'react';
import { DividerProps, FlexProps, ImageProps, LinkProps } from '@cmpsr/components';

export interface FooterProps extends FlexProps {
  linkGroups: Array<{ title: string; items: Array<LinkProps> }>;
  copyGroup?: ReactNode;
  bottomContent?: ReactNode;
  dividerProps?: DividerProps;
}

export interface FooterStaticMembers {
  Logo: FC<ImageProps>;
}
