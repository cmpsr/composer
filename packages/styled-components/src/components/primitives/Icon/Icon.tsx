import React from 'react';
import { Props, Types } from './Icon.types';

export const Icon = ({
  children,
  width = 24,
  height = 24,
  viewBoxWidth = 24,
  viewBoxHeight = 24,
  className,
  testId = 'icon',
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

Icon.Types = Types;
