import React from 'react';
import cn from 'classnames';
import { StyledTypography } from './Typography.styled';
import { Types, Modes, Intensities, Tags, Props } from './Typography.types';

export const Typography = ({
  className,
  children,
  type,
  intensity,
  tag,
  mode,
  htmlFor,
  testId = 'typography',
  customCss,
}: Props) => (
  <StyledTypography
    css={customCss}
    as={tag}
    htmlFor={htmlFor}
    data-testid={testId}
    className={cn(type, intensity, mode, className)}
  >
    {children}
  </StyledTypography>
);

Typography.Types = Types;
Typography.Modes = Modes;
Typography.Intensities = Intensities;
Typography.Tags = Tags;
