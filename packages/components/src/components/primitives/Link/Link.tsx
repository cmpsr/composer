import React, { ReactNode } from 'react';
import cn from 'classnames';

export const LINK_DEFAULT_TEST_ID = 'link';
export enum LinkTypes {
  Image = 'flex justify-center',
  Text = 'text-btn',
  Primary = 'primary-btn',
  Secondary = 'secondary-btn',
}

export enum TargetOption {
  Blank = '_blank',
  Parent = '_parent',
  Top = '_top',
  Framename = 'framename',
}

type Props = {
  children?: ReactNode;
  className?: string;
  textClassName?: string;
  route?: { slug: string };
  url?: string;
  type?: LinkTypes;
  testId?: string;
  target?: TargetOption;
};

export const Link = ({
  children,
  className,
  route,
  type = LinkTypes.Text,
  url,
  testId = LINK_DEFAULT_TEST_ID,
  target,
}: Props) => {
  return (
    <a
      target={target}
      href={route ? route.slug : url}
      className={cn('flex-grow-0', type, className)}
      data-testid={testId}
    >
      {children}
    </a>
  );
};
