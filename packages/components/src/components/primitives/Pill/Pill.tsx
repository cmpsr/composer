import React from 'react';
import cn from 'classnames';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives/Typography';

export const PILL_DEFAULT_TEST_ID = 'pill';

type Props = {
  className?: string;
  label?: string;
  testId?: string;
};

export const Pill = ({
  className,
  label,
  testId = PILL_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <div
      className={cn(
        className,
        'text-center align-middle rounded-full border border-outline-primary-50 w-auto inline-block py-0.375 px-5'
      )}
      data-testid={testId}
    >
      <Typography
        mode={TypographyMode.Dark50}
        tag="span"
        type={TypographyTypes.Detail}
      >
        {label}
      </Typography>
    </div>
  );
};
