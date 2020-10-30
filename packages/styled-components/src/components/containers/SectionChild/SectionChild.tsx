import React from 'react';
import { Props } from './SectionChild.types';
import { StyledSectionChild } from './SectionChild.styled';

export const SectionChild = ({
  children,
  className,
  customCss,
  testId = 'sectionChild',
}: Props) => (
  <StyledSectionChild
    data-testid={testId}
    className={className}
    css={customCss}
  >
    {children}
  </StyledSectionChild>
);
