import React, { FC } from 'react';
import { Image, Link } from '@cmpsr/components';
import { NavigationImageProps } from '../types';

export const NavigationImage: FC<NavigationImageProps> = ({ href, ...props }) =>
  href ? (
    <Link href={href}>
      <Image alt="navigation logotype" height="2rem" {...props} />
    </Link>
  ) : (
    <Image alt="navigation logotype" height="2rem" {...props} />
  );
