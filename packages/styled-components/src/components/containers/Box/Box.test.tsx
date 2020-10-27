import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from '.';

describe('Box', () => {
  const testId = 'box';
  it('should render children', () => {
    render(<Box>foo</Box>);
    screen.getByText('foo');
  });
  it('should render class', () => {
    render(<Box className="foo">foo</Box>);
    const box = screen.getByTestId(testId);
    expect(box).toHaveClass('foo');
  });
  it('should render screen size', () => {
    render(<Box size={Box.Sizes.Screen}>foo</Box>);
    const box = screen.getByTestId(testId);
    expect(box).toHaveClass(Box.Sizes.Screen);
  });
  it('should render full size', () => {
    render(<Box size={Box.Sizes.Full}>foo</Box>);
    const box = screen.getByTestId(testId);
    expect(box).toHaveClass(Box.Sizes.Full);
  });
  it('should render content size', () => {
    render(<Box size={Box.Sizes.Content}>foo</Box>);
    const box = screen.getByTestId(testId);
    expect(box).toHaveClass(Box.Sizes.Content);
  });
});
