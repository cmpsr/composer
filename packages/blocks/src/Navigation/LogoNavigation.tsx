import React, { FC } from 'react';
import { Image, Link } from '@cmpsr/components';
import { NavigationProps } from './types';

export const LogoNavigation: FC<Omit<NavigationProps, 'sticky' | 'anchors'>> = ({ logoUrl, logoHref }) =>
  logoHref ? (
    <Link href={logoHref}>
      <Image src={logoUrl} alt="navigation logotype" height="2rem" />
    </Link>
  ) : (
    <Image src={logoUrl} alt="navigation logotype" height="2rem" />
  );
