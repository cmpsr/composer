import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  NUMERIC_BADGE_DEFAULT_TEST_ID,
  NumericBadge,
  BadgeColor,
} from './NumericBadge';

describe('NumericBadge', () => {
  it('should render numeric content', () => {
    render(<NumericBadge number={3} />);
    const badge = screen.getByText('3');
    expect(badge).toBeInTheDocument();
  });
  it('should render maximum number when content exceeds the maximum', () => {
    render(<NumericBadge number={2} maximumNumber={1} />);
    const badge = screen.getByText('1+');
    expect(badge).toBeInTheDocument();
  });
  it('should render number with primary color', () => {
    render(<NumericBadge color={BadgeColor.Primary} number={3} />);
    const badge = screen.getByTestId(NUMERIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('bg-fill-primary-900');
  });
  it('should render number with secondary color', () => {
    render(<NumericBadge color={BadgeColor.Secondary} number={3} />);
    const badge = screen.getByTestId(NUMERIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('bg-fill-secondary-900');
  });
  it('should render number with error system color', () => {
    render(<NumericBadge color={BadgeColor.Error} number={3} />);
    const badge = screen.getByTestId(NUMERIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('bg-fill-system-error');
  });
  it('should render class', () => {
    render(<NumericBadge className="dummy" number={3} />);
    const badge = screen.getByTestId(NUMERIC_BADGE_DEFAULT_TEST_ID);
    expect(badge).toHaveClass('dummy');
  });
});
