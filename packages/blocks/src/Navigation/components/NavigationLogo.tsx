import React, { FC } from 'react';
import { Image, Link } from '@cmpsr/components';
import { NavigationLogoProps } from '../types';

export const NavigationLogo: FC<NavigationLogoProps> = ({ href, ...props }) =>
  href ? (
    <Link href={href}>
      <Image alt="navigation logotype" height="2rem" {...props} />
    </Link>
  ) : (
    <Image alt="navigation logotype" height="2rem" {...props} />
  );
