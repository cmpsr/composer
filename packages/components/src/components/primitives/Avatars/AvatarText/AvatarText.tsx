import React from 'react';
import cn from 'classnames';
import { Typography, TypographyMode } from 'components/primitives/Typography';
import {
  getAvatarTextClasses,
  getAvatarTypographyType,
} from 'utils/getAvatarTextClasses';

export const AVATAR_TEXT_DEFAULT_TEST_ID = 'avatarText';

export enum AvatarSize {
  ExtraSmall = 'w-1.75 h-1.75',
  Small = 'w-10 h-10',
  Medium = 'w-12 h-12',
  Large = 'w-3.5 h-3.5',
}

export enum AvatarBackgroundColor {
  Primary100 = 'bg-fill-primary-900',
  Primary25 = 'bg-fill-primary-25',
}

type Props = {
  text: string;
  className?: string;
  highlightClassName?: string;
  testId?: string;
  size?: AvatarSize;
  backgroundColor?: AvatarBackgroundColor;
  isHighlighted?: boolean;
};

export const AvatarText = ({
  text,
  className,
  highlightClassName,
  testId = AVATAR_TEXT_DEFAULT_TEST_ID,
  size = AvatarSize.Large,
  backgroundColor = AvatarBackgroundColor.Primary100,
  isHighlighted,
}: Props) => {
  const { highlightClasses, avatarClasses, textClasses } = getAvatarTextClasses(
    size,
    backgroundColor
  );
  const typographyType = getAvatarTypographyType(size);
  const avatar = (
    <div className={cn(className, avatarClasses)} data-testid={testId}>
      <Typography
        className={textClasses}
        mode={TypographyMode.Light100}
        tag="span"
        type={typographyType}
      >
        {text}
      </Typography>
    </div>
  );
  return isHighlighted ? (
    <div
      data-testid="avatarTextHighlight"
      className={cn(highlightClasses, highlightClassName)}
    >
      {avatar}
    </div>
  ) : (
    avatar
  );
};
