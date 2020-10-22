import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Link', () => {
  const testId = 'link';
  it('should render correctly with children', () => {
    render(
      <Link route={{ slug: 'link_test' }}>
        <div>Link test</div>
      </Link>
    );
    const link = screen.getByTestId(testId);
    expect(link.children).toHaveLength(1);
  });
  it('should render correctly without slug', () => {
    render(<Link>Link test</Link>);
    screen.getByText('Link test');
  });
  it('should render class', () => {
    render(<Link className="foo">Link test</Link>);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('foo');
  });
  it('should render Image type', () => {
    render(<Link type={Link.Types.Image}>Link test</Link>);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('image');
  });
  it('should render Text type', () => {
    render(<Link type={Link.Types.Text}>Link test</Link>);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('text');
  });
  it('should render Primary type', () => {
    render(<Link type={Link.Types.Primary}>Link test</Link>);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('primary');
  });
  it('should render Secondary type', () => {
    render(<Link type={Link.Types.Secondary}>Link test</Link>);
    const link = screen.getByTestId(testId);
    expect(link).toHaveClass('secondary');
  });
  it('should render href', () => {
    render(<Link route={{ slug: 'link_test' }}>Link test</Link>);
    const link = screen.getByTestId(testId);
    expect(link.getAttribute('href')).toBe('link_test');
  });
  it('should render target', () => {
    render(<Link target={Link.Target.Blank} />);
    const link = screen.getByTestId(testId);
    expect(link).toHaveAttribute('target', '_blank');
  });
});
