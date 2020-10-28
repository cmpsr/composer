import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
  it('should render', () => {
    render(<Grid />);
    screen.getByTestId('grid');
  });
  it('should render children', () => {
    render(<Grid>foo</Grid>);
    screen.getByText('foo');
  });
  it('should render custom CSS as a class', () => {
    const { getByTestId } = render(<Grid customCss="customCss">foo</Grid>);
    const grid = getByTestId('grid');
    expect(grid).toHaveClass('custom');
  });
});
