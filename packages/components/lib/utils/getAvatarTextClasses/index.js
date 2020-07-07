"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvatarTypographyType = exports.getAvatarTextClasses = void 0;

var _AvatarText = require("../../components/primitives/Avatars/AvatarText");

var _Typography = require("../../components/primitives/Typography");

const getAvatarTextClasses = (size, backgroundColor) => {
  let highlightClasses = 'flex items-center justify-center rounded-full border-2 border-solid border-fill-secondary-75';
  const avatarClasses = `flex items-center justify-center rounded-full ${size} ${backgroundColor}`;
  const textClasses = 'overflow-hidden truncate p-0.15';

  switch (size) {
    case _AvatarText.AvatarSize.Large:
      highlightClasses = `${highlightClasses} w-16 h-16`;
      break;

    case _AvatarText.AvatarSize.Medium:
      highlightClasses = `${highlightClasses} w-3.5 h-3.5`;
      break;

    case _AvatarText.AvatarSize.Small:
      highlightClasses = `${highlightClasses} w-12 h-12`;
      break;

    case _AvatarText.AvatarSize.ExtraSmall:
      highlightClasses = `${highlightClasses} w-2.15 h-2.15`;
      break;

    default:
      break;
  }

  return {
    highlightClasses,
    avatarClasses,
    textClasses
  };
};

exports.getAvatarTextClasses = getAvatarTextClasses;

const getAvatarTypographyType = size => {
  switch (size) {
    case _AvatarText.AvatarSize.Large:
    case _AvatarText.AvatarSize.Medium:
      return _Typography.TypographyTypes.Headline6;

    case _AvatarText.AvatarSize.Small:
      return _Typography.TypographyTypes.Body;

    case _AvatarText.AvatarSize.ExtraSmall:
      return _Typography.TypographyTypes.Eyebrow;

    default:
      return null;
  }
};

exports.getAvatarTypographyType = getAvatarTypographyType;