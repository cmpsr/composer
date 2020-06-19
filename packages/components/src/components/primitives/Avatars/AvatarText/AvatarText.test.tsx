import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  AvatarText,
  AvatarBackgroundColor,
  AvatarSize,
  AVATAR_TEXT_DEFAULT_TEST_ID,
} from './AvatarText';

describe('AvatarText', () => {
  it('should render classname', () => {
    render(<AvatarText text="ok" className="dummyClassName" />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass('dummyClassName');
  });
  it('should render highlightClassName', () => {
    render(
      <AvatarText
        isHighlighted
        text="ok"
        highlightClassName="highlightClassName"
      />
    );
    const avatarTextHighlight = screen.getByTestId('avatarTextHighlight');
    expect(avatarTextHighlight).toHaveClass('highlightClassName');
  });
  it('should render text', () => {
    render(<AvatarText text="ok" />);
    const avatar = screen.getByText('ok');
    expect(avatar).toBeInTheDocument();
  });
  it('should render large size', () => {
    render(<AvatarText text="ok" size={AvatarSize.Large} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarSize.Large);
  });
  it('should render medium size', () => {
    render(<AvatarText text="ok" size={AvatarSize.Medium} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarSize.Medium);
  });
  it('should render small size', () => {
    render(<AvatarText text="ok" size={AvatarSize.Small} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarSize.Small);
  });
  it('should render extra small size', () => {
    render(<AvatarText text="ok" size={AvatarSize.ExtraSmall} />);
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarSize.ExtraSmall);
  });
  it('should render primary background-100 color', () => {
    render(
      <AvatarText
        text="ok"
        backgroundColor={AvatarBackgroundColor.Primary100}
      />
    );
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarBackgroundColor.Primary100);
  });
  it('should render primary background-25 color', () => {
    render(
      <AvatarText text="ok" backgroundColor={AvatarBackgroundColor.Primary25} />
    );
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    expect(avatar).toHaveClass(AvatarBackgroundColor.Primary25);
  });
  it('should render highlight', () => {
    render(<AvatarText text="ok" isHighlighted />);
    const avatar = screen.getByTestId('avatarTextHighlight');
    expect(avatar).toBeInTheDocument();
  });
});
