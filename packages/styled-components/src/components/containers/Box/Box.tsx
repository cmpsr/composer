import React from 'react';
import cn from 'classnames';
import { Props, Sizes } from './Box.types';
import { StyledBox } from './Box.styled';

export const Box = ({ children, className, size, testId = 'box' }: Props) => (
  <StyledBox className={cn(className, size)} data-testid={testId}>
    {children}
  </StyledBox>
);

Box.Sizes = Sizes;
