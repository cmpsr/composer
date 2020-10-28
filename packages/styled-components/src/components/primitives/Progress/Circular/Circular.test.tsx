import React from 'react';
import { render, screen } from '@testing-library/react';
import { Circular } from './Circular';
import { Color, CircularSize } from './Circular.types';

describe('Circular', () => {
  it('should render class', () => {
    render(<Circular className="dummyClassName" />);
    const svg = screen.getByTestId('circular');
    expect(svg).toHaveClass('dummyClassName');
  });
  
  it('should render class for circle', () => {
    const { container } = render(<Circular color={Color.White} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle).toHaveClass(Color.White);
  });
  
  it('should render with default stroke attribute for circle', () => {
    const { container } = render(<Circular />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle.getAttribute('stroke')).toBe('primary');
  });
  
  it('should render with stroke color for circle', () => {
    const { container } = render(<Circular color={Color.White} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle.getAttribute('stroke')).toBe('white');
  });
  
  it('should render with default strokeWidth attribute for circle', () => {
    const { container } = render(<Circular />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle.getAttribute('stroke-width')).toBe('2');
  });
  it('should render with strokeWidth attribute for circle', () => {
    const { container } = render(<Circular strokeWidth={3} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle.getAttribute('stroke-width')).toBe('3');
  });
  
  it('should render with default size for circle', () => {
    const { container } = render(<Circular />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle.getAttribute('cx')).toBe('10');
    expect(circle.getAttribute('cy')).toBe('10');
    expect(circle.getAttribute('r')).toBe('9');
    expect(svg).toHaveClass(CircularSize.Small);
  });
  it('should render with size for circle', () => {
    const { container } = render(<Circular size={CircularSize.Large} />);
    const svg = container.firstChild;
    const circle = svg.firstChild;
    expect(circle.getAttribute('cx')).toBe('50');
    expect(circle.getAttribute('cy')).toBe('50');
    expect(circle.getAttribute('r')).toBe('20');
    expect(svg).toHaveClass(CircularSize.Large);
  });
});
