import React from 'react';
import cn from 'classnames';
import { Props, Types, Target } from './Link.types';
import { StyledLink } from './Link.styled';

export const Link = ({
  children,
  className,
  route,
  type = Types.Text,
  url,
  testId = 'link',
  target,
}: Props) => (
  <StyledLink
    target={target}
    href={route ? route.slug : url}
    className={cn(type, className)}
    data-testid={testId}
  >
    {children}
  </StyledLink>
);

Link.Types = Types;
Link.Target = Target;
