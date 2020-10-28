import React from 'react';
import cn from 'classnames';
import { Props } from './Grid.types';
import { StyledGrid } from './Grid.styled';

export const Grid = ({
  children,
  className,
  customCss,
  testId = 'grid',
}: Props) => {
  return (
    <StyledGrid
      data-testid={testId}
      css={customCss}
      className={cn(className, { custom: customCss })}
    >
      {children}
    </StyledGrid>
  );
};
