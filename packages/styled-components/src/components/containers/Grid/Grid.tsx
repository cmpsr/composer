import React from 'react';
import { Props } from './Grid.types';
import { StyledGrid } from './Grid.styled';

export const Grid = ({
  children,
  className,
  customCss,
  testId = 'grid',
}: Props) => {
  return (
    <StyledGrid data-testid={testId} css={customCss} className={className}>
      {children}
    </StyledGrid>
  );
};
