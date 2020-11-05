import React from 'react';
import { render, screen } from '@testing-library/react';
import { AvatarText } from './AvatarText';

describe('AvatarText', () => {
  const AVATAR_TEXT_DEFAULT_TEST_ID = 'avatarText';
  it('should render text', () => {
    render(<AvatarText text="foo" />);
    screen.getByText('foo');
  });
  it('should render class', () => {
    render(<AvatarText text="foo" className="foo" />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass('foo');
  });
  it('should render highlight', () => {
    render(<AvatarText text="foo" isHighlighted />);
    screen.getByTestId('avatarTextHighlight');
  });
  it('should render highlight class', () => {
    render(<AvatarText text="foo" isHighlighted highlightClassName="foo" />);
    const avatarHighlight = screen.getByTestId('avatarTextHighlight');
    expect(avatarHighlight).toHaveClass('custom');
  });
  it('should render extra small size', () => {
    render(<AvatarText text="foo" size={AvatarText.Sizes.ExtraSmall} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarText.Sizes.ExtraSmall);
  });
  it('should render small size', () => {
    render(<AvatarText text="foo" size={AvatarText.Sizes.Small} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarText.Sizes.Small);
  });
  it('should render medium size', () => {
    render(<AvatarText text="foo" size={AvatarText.Sizes.Medium} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarText.Sizes.Medium);
  });
  it('should render large size', () => {
    render(<AvatarText text="foo" size={AvatarText.Sizes.Large} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarText.Sizes.Large);
  });
  it('should render primary900 background', () => {
    render(
      <AvatarText
        text="foo"
        backgroundColor={AvatarText.BackgroundColors.Primary900}
      />
    );
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarText.BackgroundColors.Primary900);
  });
  it('should render primary600 background', () => {
    render(
      <AvatarText
        text="foo"
        backgroundColor={AvatarText.BackgroundColors.Primary600}
      />
    );
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarText.BackgroundColors.Primary600);
  });
});
