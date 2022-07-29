import { FC } from 'react';
import { DividerProps, FlexProps, ImageProps, LinkProps, TextProps } from '@cmpsr/components';
export { FlexProps as FooterProps } from '@cmpsr/components';

export interface FooterLinkGroupStaticMember {
  Title: FC<TextProps>;
  Link: FC<LinkProps>;
}

export interface FooterContentStaticMembers {
  Links: FC<FlexProps>;
  LinkGroup: FC<FlexProps> & FooterLinkGroupStaticMember;
}

export interface FooterStaticMembers {
  Logo: FC<ImageProps>;
  Content: FC<FlexProps> & FooterContentStaticMembers;
  Bottom: FC<DividerProps>;
}
