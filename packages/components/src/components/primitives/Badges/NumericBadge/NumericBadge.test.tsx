import React from 'react';
import { render, screen } from '@testing-library/react';
import { NumericBadge } from './NumericBadge';

describe('NumericBadge', () => {
  const testId = 'numericBadge';
  it('should render number', () => {
    render(<NumericBadge number={3} />);
    screen.getByText('3');
  });
  it('should render maximum number when content exceeds the maximum', () => {
    render(<NumericBadge number={2} maximumNumber={1} />);
    screen.getByText('1+');
  });
  it('should render number with primary color', () => {
    render(<NumericBadge color={NumericBadge.Color.Primary} number={3} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('primary');
  });
  it('should render number with secondary color', () => {
    render(<NumericBadge color={NumericBadge.Color.Secondary} number={3} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('secondary');
  });
  it('should render number with error color', () => {
    render(<NumericBadge color={NumericBadge.Color.Error} number={3} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('error');
  });
  it('should render class', () => {
    render(<NumericBadge className="foo" number={3} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('foo');
  });
});
