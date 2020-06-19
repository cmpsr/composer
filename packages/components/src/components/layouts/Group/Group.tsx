import React, { ReactNode } from 'react';
import cn from 'classnames';
import { getClassesFromStyle } from 'utils';
import { GroupStyle } from 'types';

type Props = {
  children?: ReactNode;
  className?: string;
  style?: GroupStyle;
};

export const Group = ({ children, className, style = {} }: Props) => {
  const groupStyle = getClassesFromStyle(style.background);
  return (
    <div className={cn('max-w-content', groupStyle, className)}>{children}</div>
  );
};
