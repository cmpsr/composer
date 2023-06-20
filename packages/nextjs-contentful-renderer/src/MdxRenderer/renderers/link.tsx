import React from 'react';
import { Link, LinkProps, useMarkdown } from '@cmpsr/components';

export const renderLink = ({ children, ...props }: LinkProps) => {
  const { link = {} } = useMarkdown();
  return (
    <Link display="inline-flex" {...props} {...link}>
      {children}
    </Link>
  );
};
