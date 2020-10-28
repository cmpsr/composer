import React from 'react';
import cn from 'classnames';
import { StyledSvg, StyledCircle } from './Circular.styled';
import { Color, CircularSize, Props } from './Circular.types';

export const CIRCULAR_DEFAULT_TEST_ID = 'circular';

export const Circular = ({
  className,
  strokeWidth = 2,
  testId = CIRCULAR_DEFAULT_TEST_ID,
  size = CircularSize.Small,
  color = Color.Primary,
}: Props) => {
  return (
    <StyledSvg className={cn(className, size)} data-testid={testId}>
      <StyledCircle
        stroke={color}
        className={cn(color, 'path')}
        cx={size === CircularSize.Small ? 10 : 50}
        cy={size === CircularSize.Small ? 10 : 50}
        r={size === CircularSize.Small ? 9 : 20}
        fill="none"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
      />
    </StyledSvg>
  );
};
