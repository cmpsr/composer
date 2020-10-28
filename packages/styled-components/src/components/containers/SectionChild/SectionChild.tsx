import React from 'react';
import cn from 'classnames';
import { Props } from './SectionChild.types';
import { StyledSectionChild } from './SectionChild.styled';

export const SectionChild = ({
  children,
  customCss,
  testId = 'sectionChild',
}: Props) => (
  <StyledSectionChild
    data-testid={testId}
    className={cn({ custom: customCss })}
    css={customCss}
  >
    {children}
  </StyledSectionChild>
);
