import { getAvatarTextClasses, getAvatarTypographyType } from '.';
import {
  AvatarSize,
  AvatarBackgroundColor,
} from '../../components/primitives/Avatars/AvatarText';
import { TypographyTypes } from '../../components/primitives/Typography';

describe('getAvatarTextClasses', () => {
  const baseHighlight =
    'flex items-center justify-center rounded-full border-2 border-solid border-fill-secondary-75';
  const baseAvatar = `flex items-center justify-center rounded-full`;

  it('should return a string of classnames for large size', () => {
    const { avatarClasses, highlightClasses } = getAvatarTextClasses(
      AvatarSize.Large,
      AvatarBackgroundColor.Primary100
    );
    expect(avatarClasses).toContain(`${baseAvatar} w-3.5 h-3.5`);
    expect(highlightClasses).toContain(`${baseHighlight} w-16 h-16`);
  });
  it('should return a string of classnames for medium size', () => {
    const { avatarClasses, highlightClasses } = getAvatarTextClasses(
      AvatarSize.Medium,
      AvatarBackgroundColor.Primary100
    );
    expect(avatarClasses).toContain(`${baseAvatar} w-12 h-12`);
    expect(highlightClasses).toContain(`${baseHighlight} w-3.5 h-3.5`);
  });
  it('should return a string of classnames for small size', () => {
    const { avatarClasses, highlightClasses } = getAvatarTextClasses(
      AvatarSize.Small,
      AvatarBackgroundColor.Primary100
    );
    expect(avatarClasses).toContain(`${baseAvatar} w-10 h-10`);
    expect(highlightClasses).toContain(`${baseHighlight} w-12 h-12`);
  });
  it('should return a string of classnames for extra small size', () => {
    const { avatarClasses, highlightClasses } = getAvatarTextClasses(
      AvatarSize.ExtraSmall,
      AvatarBackgroundColor.Primary100
    );
    expect(avatarClasses).toContain(`${baseAvatar} w-1.75 h-1.75`);
    expect(highlightClasses).toContain(`${baseHighlight} w-2.15 h-2.15`);
  });
  it('should return string of classnames for primary-100 background color', () => {
    const { avatarClasses } = getAvatarTextClasses(
      AvatarSize.Small,
      AvatarBackgroundColor.Primary100
    );
    expect(avatarClasses).toContain(`bg-fill-primary-900`);
  });
  it('should return string of classnames for primary-25 background color', () => {
    const { avatarClasses } = getAvatarTextClasses(
      AvatarSize.Small,
      AvatarBackgroundColor.Primary25
    );
    expect(avatarClasses).toContain(`bg-fill-primary-25`);
  });
});

describe('getAvatarTypographyType', () => {
  it('should have headline6 type when large size', () => {
    expect(getAvatarTypographyType(AvatarSize.Large)).toBe(
      TypographyTypes.Headline6
    );
  });
  it('should have headline6 type when medium size', () => {
    expect(getAvatarTypographyType(AvatarSize.Medium)).toBe(
      TypographyTypes.Headline6
    );
  });
  it('should have body type when small size', () => {
    expect(getAvatarTypographyType(AvatarSize.Small)).toBe(
      TypographyTypes.Body
    );
  });
  it('should have eyebrow type when extrasmall size', () => {
    expect(getAvatarTypographyType(AvatarSize.ExtraSmall)).toBe(
      TypographyTypes.Eyebrow
    );
  });
  it('should return null when size doesnt exist', () => {
    expect(getAvatarTypographyType(undefined)).toBeNull();
  });
});
