import React from 'react';
import cn from 'classnames';
import { Props } from './IconicBadge.types';
import { Color } from '../Badges.types';
import { StyledContainer, StyledIcon } from './IconicBadge.styled';

export const IconicBadge = ({
  icon,
  color,
  className,
  testId = 'iconicBadge',
}: Props) => (
  <StyledContainer className={cn(className, color)} data-testid={testId}>
    <StyledIcon>{icon}</StyledIcon>
  </StyledContainer>
);

IconicBadge.Color = Color;
