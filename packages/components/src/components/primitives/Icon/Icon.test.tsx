import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('should render children', () => {
    render(<Icon>test</Icon>);
    const icon = screen.getByText('test');
    expect(icon).toBeInTheDocument();
  });
  it('should render default width and height', () => {
    render(<Icon>test</Icon>);
    const icon = screen.getByText('test');
    expect(icon.getAttribute('width')).toBe('24px');
    expect(icon.getAttribute('height')).toBe('24px');
  });
  it('should render class', () => {
    render(<Icon className="foo">test</Icon>);
    const input = screen.getByText('test');
    expect(input).toHaveClass('foo');
  });
  it('should render viewBoxHeight and viewBoxWidth', () => {
    render(
      <Icon viewBoxHeight={2} viewBoxWidth={3}>
        test
      </Icon>
    );
    const icon = screen.getByText('test');
    expect(icon.getAttribute('viewBox')).toBe('0 0 3 2');
  });
});
