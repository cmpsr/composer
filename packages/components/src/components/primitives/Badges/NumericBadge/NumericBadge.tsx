import React from 'react';
import cn from 'classnames';
import { Typography } from 'components/primitives/Typography';
import { Props } from './NumericBadge.types';
import { Color } from '../Badges.types';
import { StyledContainer, StyledTypography } from './NumericBadge.styled';

export const NumericBadge = ({
  number,
  color = Color.Secondary,
  className,
  testId = 'numericBadge',
  maximumNumber = 9,
}: Props) => {
  return (
    <StyledContainer className={cn(className, color)} data-testid={testId}>
      <StyledTypography
        mode={Typography.Modes.Light100}
        tag={Typography.Tags.Span}
        type={Typography.Types.Eyebrow}
      >
        {number > maximumNumber ? `${maximumNumber}+` : number}
      </StyledTypography>
    </StyledContainer>
  );
};

NumericBadge.Color = Color;
