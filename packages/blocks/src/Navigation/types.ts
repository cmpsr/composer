import { FC } from 'react';
import { FlexProps, ImageProps, LinkProps } from '@cmpsr/components';

export interface NavigationProps extends FlexProps {
  sticky?: boolean;
  keepActionsAlwaysVisible?: boolean;
}

export interface NavigationImageProps extends ImageProps {
  href?: string;
}

export interface NavigationLinkProps extends LinkProps {
  showDivider?: boolean;
}

export interface NavigationLinksProps extends FlexProps {
  showDividers?: boolean;
}

export interface NavigationStaticMembers {
  Image: FC<NavigationImageProps>;
  Links: FC<NavigationLinksProps>;
  Link: FC<NavigationLinkProps>;
  Actions: FC<FlexProps>;
  Action: FC<LinkProps>;
}
