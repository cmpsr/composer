import React from 'react';
import { Props } from './Section.types';
import { StyledSection } from './Section.styled';

export const Section = ({
  children,
  className,
  customCss,
  testId = 'section',
}: Props) => (
  <StyledSection css={customCss} className={className} data-testid={testId}>
    {children}
  </StyledSection>
);
