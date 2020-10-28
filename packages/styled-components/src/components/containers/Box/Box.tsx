import React from 'react';
import cn from 'classnames';
import { Props, Sizes } from './Box.types';
import { StyledBox } from './Box.styled';

export const Box = ({
  children,
  className,
  size,
  customCss,
  testId = 'box',
}: Props) => (
  <StyledBox
    css={customCss}
    className={cn(className, size, { custom: customCss })}
    data-testid={testId}
  >
    {children}
  </StyledBox>
);

Box.Sizes = Sizes;
