import { FC, PropsWithChildren } from 'react';
import { FlexProps, ImageProps, LinkProps } from '@cmpsr/components';

export interface NavigationProps extends FlexProps {
  sticky?: boolean;
}

export interface NavigationLogoProps extends ImageProps {
  href?: string;
}

export interface NavigationLinkProps extends LinkProps {
  showDivider?: boolean;
}

export interface NavigationStaticMembers {
  Logo: FC<NavigationLogoProps>;
  Links: FC<PropsWithChildren<{}>>;
  Link: FC<NavigationLinkProps>;
  Actions: FC<FlexProps>;
  Action: FC<LinkProps>;
}
