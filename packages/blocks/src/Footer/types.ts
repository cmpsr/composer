import { FC } from 'react';
import { Divider, Flex, FlexProps, Image, Link } from '@cmpsr/components';
export { FlexProps as FooterProps } from '@cmpsr/components';

export interface FooterActionsProps extends FlexProps {
  title?: string;
}
export interface FooterStaticMembers {
  Logo: typeof Image;
  Content: typeof Flex;
  Bottom: typeof Divider;
  ActionsContainer: typeof Flex;
  Actions: FC<FooterActionsProps>;
  Action: typeof Link;
  CopyGroup: typeof Flex;
}
