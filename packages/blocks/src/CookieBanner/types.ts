import { AlertProps, FlexProps } from '@cmpsr/components';
import { FC } from 'react';

export interface CookieBannerProps extends FlexProps {
  acceptAllCta?: string;
  acceptRequiredOnlyCta?: string;
  cookieKey?: string;
  cookieVersion?: string;
}

export interface CookieBannerStaticMembers {
  Content: FC<AlertProps>;
}
