import React from 'react';
import { Typography, Icon, error as Error } from 'components/primitives';
import { Props } from './ErrorField.types';
import { StyledWrapper, StyledIcon } from './ErrorField.styled';

export const ErrorField = ({
  error,
  className,
  testId = 'errorField',
  customCss,
}: Props) => (
  <StyledWrapper css={customCss} className={className} data-testid={testId}>
    <StyledIcon width={18} height={18}>
      <Error type={Icon.Types.Filled} />
    </StyledIcon>
    <Typography
      tag={Typography.Tags.Paragraph}
      type={Typography.Types.FormError}
    >
      {error}
    </Typography>
  </StyledWrapper>
);
