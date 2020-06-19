import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children?: ReactNode;
  className?: string;
};

export const SectionChild = ({ children, className }: Props) => {
  return <div className={cn('py-8', className)}>{children}</div>;
};
