import React, { ReactNode } from 'react';
import cn from 'classnames';

export const SECTION_DEFAULT_TEST_ID = 'section';

type Props = {
  children?: ReactNode;
  className?: string;
  testId?: string;
};

export const Section = ({
  children,
  className,
  testId = SECTION_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <section className={cn('mb-4', className)} data-testid={testId}>
      {children}
    </section>
  );
};
