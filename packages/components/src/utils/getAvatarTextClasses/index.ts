import {
  AvatarSize,
  AvatarBackgroundColor,
} from 'components/primitives/Avatars/AvatarText';
import { TypographyTypes } from 'components/primitives/Typography';

export const getAvatarTextClasses = (
  size: AvatarSize,
  backgroundColor: AvatarBackgroundColor
) => {
  let highlightClasses =
    'flex items-center justify-center rounded-full border-2 border-solid border-fill-secondary-75';
  const avatarClasses = `flex items-center justify-center rounded-full ${size} ${backgroundColor}`;
  const textClasses = 'overflow-hidden truncate p-0.15';

  switch (size) {
    case AvatarSize.Large:
      highlightClasses = `${highlightClasses} w-16 h-16`;
      break;
    case AvatarSize.Medium:
      highlightClasses = `${highlightClasses} w-3.5 h-3.5`;
      break;
    case AvatarSize.Small:
      highlightClasses = `${highlightClasses} w-12 h-12`;
      break;
    case AvatarSize.ExtraSmall:
      highlightClasses = `${highlightClasses} w-2.15 h-2.15`;
      break;
    default:
      break;
  }
  return {
    highlightClasses,
    avatarClasses,
    textClasses,
  };
};

export const getAvatarTypographyType = (size: AvatarSize) => {
  switch (size) {
    case AvatarSize.Large:
    case AvatarSize.Medium:
      return TypographyTypes.Headline6;
    case AvatarSize.Small:
      return TypographyTypes.Body;
    case AvatarSize.ExtraSmall:
      return TypographyTypes.Eyebrow;
    default:
      return null;
  }
};
