import React from 'react';
import cn from 'classnames';
import {
  StyledAvatarText,
  StyledHighlighter,
  StyledTypography,
} from './AvatarText.styled';
import { BackgroundColors, Sizes, Props } from './AvatarText.types';
import { Typography } from 'components/primitives/Typography';

const flatTypographyType = (size: Sizes) => {
  switch (size) {
    case Sizes.Large:
    case Sizes.Medium:
      return Typography.Types.Headline6;
    case Sizes.Small:
      return Typography.Types.Body;
    case Sizes.ExtraSmall:
      return Typography.Types.Eyebrow;
    default:
      return null;
  }
};

export const AvatarText = ({
  text,
  className,
  highlightClassName,
  testId = 'avatarText',
  size = Sizes.Large,
  backgroundColor = BackgroundColors.Primary900,
  isHighlighted,
}: Props) => {
  const avatar = (
    <StyledAvatarText
      className={cn(className, size, backgroundColor)}
      data-testid={testId}
    >
      <StyledTypography
        className={cn(size)}
        mode={Typography.Modes.Light100}
        tag={Typography.Tags.Span}
        type={flatTypographyType(size)}
      >
        {text}
      </StyledTypography>
    </StyledAvatarText>
  );
  return isHighlighted ? (
    <StyledHighlighter
      data-testid="avatarTextHighlight"
      className={cn(size, highlightClassName)}
    >
      {avatar}
    </StyledHighlighter>
  ) : (
    avatar
  );
};

AvatarText.Sizes = Sizes;
AvatarText.BackgroundColors = BackgroundColors;
