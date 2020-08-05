import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  ICONIC_BADGE_DEFAULT_TEST_ID,
  IconicBadge,
  BadgeColor,
} from './IconicBadge';
import { search as Search } from '../../Icon/icons/action';

describe('IconicBadge', () => {
  it('should render icon', () => {
    render(<IconicBadge icon={<Search type="filled" />} />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
  it('should render icon with primary color', () => {
    render(
      <IconicBadge color={BadgeColor.Primary} icon={<Search type="filled" />} />
    );
    const badge = screen.getByTestId(ICONIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('bg-fill-primary-900');
  });
  it('should render with secondary color', () => {
    render(
      <IconicBadge
        color={BadgeColor.Secondary}
        icon={<Search type="filled" />}
      />
    );
    const badge = screen.getByTestId(ICONIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('bg-fill-secondary-100');
  });
  it('should render icon with error system color', () => {
    render(
      <IconicBadge color={BadgeColor.Error} icon={<Search type="filled" />} />
    );
    const badge = screen.getByTestId(ICONIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('bg-fill-system-error');
  });
  it('should render class', () => {
    render(<IconicBadge className="dummy" icon={<Search type="filled" />} />);
    const badge = screen.getByTestId(ICONIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('dummy');
  });
});
