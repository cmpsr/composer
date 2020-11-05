import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconicBadge } from '.';
import { Icon, search as Search } from 'components/primitives/Icon';

describe('IconicBadge', () => {
  const testId = 'iconicBadge';
  const icon = <Search type={Icon.Types.Filled} />;
  it('should render icon', () => {
    render(<IconicBadge icon={icon} />);
    screen.getByTestId('icon');
  });
  it('should render icon with primary color', () => {
    render(<IconicBadge color={IconicBadge.Color.Primary} icon={icon} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('primary');
  });
  it('should render with secondary color', () => {
    render(<IconicBadge color={IconicBadge.Color.Secondary} icon={icon} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('secondary');
  });
  it('should render icon with error color', () => {
    render(<IconicBadge color={IconicBadge.Color.Error} icon={icon} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('error');
  });
  it('should render class', () => {
    render(<IconicBadge className="foo" icon={icon} />);
    const badge = screen.getByTestId(testId);
    expect(badge).toHaveClass('foo');
  });
});
