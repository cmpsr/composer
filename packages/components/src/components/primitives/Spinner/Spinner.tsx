import React from 'react';
import cn from 'classnames';
import { Props, Sizes, Colors } from './Spinner.types';
import { StyledSvg, StyledCircle } from './Spinner.styles';

export const Spinner = ({
  className,
  strokeWidth,
  testId = 'spinner',
  size,
  color,
}: Props) => (
  <StyledSvg className={cn(className, size)} data-testid={testId}>
    <StyledCircle
      stroke={color}
      className={color}
      cx={size === Sizes.Small ? 10 : 50}
      cy={size === Sizes.Small ? 10 : 50}
      r={size === Sizes.Small ? 9 : 20}
      fill="none"
      strokeWidth={strokeWidth ?? size === Sizes.Small ? 2 : 4}
      strokeMiterlimit="10"
    />
  </StyledSvg>
);

Spinner.Sizes = Sizes;
Spinner.Colors = Colors;
