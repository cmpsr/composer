import React from 'react';
import { Link, LinkProps } from '@cmpsr/components';
import { useMarkdown } from '../MarkdownContext';

export const renderLink = ({ children, ...props }: LinkProps) => {
  const { link = {} } = useMarkdown();
  return (
    <Link isInline {...props} {...link}>
      {children}
    </Link>
  );
};
