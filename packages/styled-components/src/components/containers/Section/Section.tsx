import React, { ReactNode } from 'react';
import { Props } from './Section.types';
import { StyledSection } from './Section.styled';

export const Section = ({ children, className, testId = 'section' }: Props) => (
  <StyledSection className={className} data-testid={testId}>
    {children}
  </StyledSection>
);
