import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  const testId = 'spinner';
  it('should render class', () => {
    render(<Spinner className="foo" />);
    const spinner = screen.getByTestId(testId);
    expect(spinner).toHaveClass('foo');
  });
  it('should render white color for circle', () => {
    const { container } = render(<Spinner color={Spinner.Colors.White} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle).toHaveClass('white');
  });
  it('should render primary color for circle', () => {
    const { container } = render(<Spinner color={Spinner.Colors.Primary} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle).toHaveClass('primary');
  });
  it('should render with small size', () => {
    render(<Spinner size={Spinner.Sizes.Small} />);
    const spinner = screen.getByTestId(testId);
    expect(spinner).toHaveClass('small');
  });
  it('should render with large size', () => {
    render(<Spinner size={Spinner.Sizes.Large} />);
    const spinner = screen.getByTestId(testId);
    expect(spinner).toHaveClass('large');
  });
  it('should render strokeWidth when provided', () => {
    const { container } = render(<Spinner strokeWidth={2} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle).toHaveAttribute('stroke-width', '2');
  });
  it('should render strokeWidth based on small size', () => {
    const { container } = render(<Spinner size={Spinner.Sizes.Small} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle).toHaveAttribute('stroke-width', '2');
  });
  it('should render strokeWidth based on large size', () => {
    const { container } = render(<Spinner size={Spinner.Sizes.Large} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle).toHaveAttribute('stroke-width', '4');
  });
});
