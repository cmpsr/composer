import React, { ReactNode } from 'react';
import cn from 'classnames';

export const BOX_DEFAULT_TEST_ID = 'box';

type Props = {
  children?: ReactNode;
  className?: string;
  size?: 'full' | 'screen' | 'content';
  testId?: string;
};

export const Box = ({
  children,
  className,
  size,
  testId = BOX_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <div
      className={cn(
        { 'w-screen h-screen': size === 'screen' },
        { 'w-full h-full': size === 'full' },
        { 'w-full h-full max-w-content mx-auto': size === 'content' },
        className,
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
