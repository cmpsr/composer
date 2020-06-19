import React from 'react';
import cn from 'classnames';

export const CIRCULAR_DEFAULT_TEST_ID = 'circular';

export enum CircularSize {
  Small = 'small',
  Large = 'large',
}

export enum CircularColor {
  Primary = 'stroke-fill-primary-100',
  White = 'white',
}

type Props = {
  className?: string;
  strokeWidth?: number;
  testId?: string;
  size?: CircularSize;
  color?: CircularColor;
};

export const Circular = ({
  className,
  strokeWidth = 2,
  testId = CIRCULAR_DEFAULT_TEST_ID,
  size = CircularSize.Small,
  color = CircularColor.Primary,
}: Props) => {
  return (
    <svg className={cn(className, size, 'circular')} data-testid={testId}>
      <circle
        stroke={color}
        className={cn(color, 'path')}
        cx={size === CircularSize.Small ? 10 : 50}
        cy={size === CircularSize.Small ? 10 : 50}
        r={size === CircularSize.Small ? 9 : 20}
        fill="none"
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
      />
    </svg>
  );
};
