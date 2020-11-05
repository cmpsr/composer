import React from 'react';
import { Props } from './Pill.types';
import { StyledPill } from './Pill.styled';
import { Typography } from 'components/primitives/Typography';

export const Pill = ({ className, label, testId = 'pill' }: Props) => {
  return (
    <StyledPill className={className} data-testid={testId}>
      <Typography
        mode={Typography.Modes.Dark50}
        tag={Typography.Tags.Span}
        type={Typography.Types.Detail}
      >
        {label}
      </Typography>
    </StyledPill>
  );
};
