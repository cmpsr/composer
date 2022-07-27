import { FC } from 'react';
import { AlertProps, ButtonProps, FlexProps } from '@cmpsr/components';

export interface CookieBannerProps extends FlexProps {
  cookieKey?: string;
  cookieVersion?: string;
}

export interface CookieBannerActionsStaticMembers {
  AcceptAll: FC<ButtonProps>;
  AcceptRequired: FC<ButtonProps>;
}

export interface CookieBannerStaticMembers {
  Content: FC<AlertProps>;
  Actions: FC<FlexProps> & CookieBannerActionsStaticMembers;
}
