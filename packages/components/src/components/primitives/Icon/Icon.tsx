import React, { ReactNode } from 'react';

export const ICON_DEFAULT_TEST_ID = 'icon';

type Props = {
  children?: ReactNode;
  width?: number;
  height?: number;
  className?: string;
  testId?: string;
  viewBoxHeight?: number;
  viewBoxWidth?: number;
};

export const Icon = ({
  children,
  width = 24,
  height = 24,
  viewBoxWidth = 24,
  viewBoxHeight = 24,
  className,
  testId = ICON_DEFAULT_TEST_ID,
}: Props) => (
  <svg
    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    width={`${width}px`}
    height={`${height}px`}
    className={className}
    data-testid={testId}
  >
    {children}
  </svg>
);
