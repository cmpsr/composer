import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Props } from './Section.types';
import { StyledSection } from './Section.styled';

export const Section = ({
  children,
  className,
  customCss,
  testId = 'section',
}: Props) => (
  <StyledSection
    css={customCss}
    className={cn(className, { custom: customCss })}
    data-testid={testId}
  >
    {children}
  </StyledSection>
);
