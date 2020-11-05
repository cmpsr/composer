import React from 'react';
import { Typography } from 'components/primitives';
import { Props } from './LinkItem.types';
import { StyledAnchor, StyledIcon, StyledContainer } from './LinkItem.styled';

export const LinkItem = ({
  className,
  url,
  route,
  title,
  icon,
  subTitle,
  target,
  testId = 'linkItem',
}: Props) => (
  <StyledAnchor
    className={className}
    href={route ? route.slug : url}
    target={target}
    data-testid={testId}
  >
    {icon && <StyledIcon>{icon}</StyledIcon>}
    <StyledContainer>
      {title && (
        <Typography tag={Typography.Tags.Span} type={Typography.Types.Body}>
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography
          tag={Typography.Tags.Span}
          type={Typography.Types.Detail}
          mode={Typography.Modes.Dark50}
        >
          {subTitle}
        </Typography>
      )}
    </StyledContainer>
  </StyledAnchor>
);
