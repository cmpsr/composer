import React, { ReactNode } from 'react';
import cn from 'classnames';

export const GRID_DEFAULT_TEST_ID = 'grid';

type Props = {
  children?: ReactNode;
  className?: string;
  testId?: string;
};

export const Grid = ({
  children,
  className,
  testId = GRID_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <div className={cn('grid', className)} data-testid={testId}>
      {children}
    </div>
  );
};
