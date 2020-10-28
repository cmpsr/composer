import React from 'react';
import cn from 'classnames';
import { Props } from './Grid.types';
import { StyledGrid } from './Grid.styled';

export const Grid = ({ children, customCss, testId = 'grid' }: Props) => {
  return (
    <StyledGrid
      data-testid={testId}
      css={customCss}
      className={cn({ custom: customCss })}
    >
      {children}
    </StyledGrid>
  );
};
