import { Divider, Flex, Image, Link, Text } from '@cmpsr/components';
export { FlexProps as FooterProps } from '@cmpsr/components';

export interface FooterLinkGroupStaticMember {
  Title: typeof Text;
  Action: typeof Link;
}

export interface FooterContentStaticMembers {
  ColumnsContainer: typeof Flex;
  Column: typeof Flex & FooterLinkGroupStaticMember;
  CopyGroup: typeof Flex;
}

export interface FooterStaticMembers {
  Logo: typeof Image;
  Content: typeof Flex & FooterContentStaticMembers;
  Bottom: typeof Divider;
}
