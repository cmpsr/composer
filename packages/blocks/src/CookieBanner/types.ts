import { FlexProps } from '@cmpsr/components';
import { ReactNode } from 'react';

export interface CookieBannerProps extends FlexProps {
  children: ReactNode;
  acceptAllCta?: string;
  acceptRequiredOnlyCta?: string;
  cookieKey?: string;
  cookieVersion?: string;
}
