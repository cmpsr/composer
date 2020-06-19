import React from 'react';
import { render } from '@testing-library/react';
import { Grid, GRID_DEFAULT_TEST_ID } from './Grid';

describe('Grid', () => {
  it('should render with children', () => {
    const { getByText } = render(<Grid>foo</Grid>);
    const grid = getByText('foo');
    expect(grid).toBeInTheDocument();
  });
  it('should render class', () => {
    const { getByTestId } = render(<Grid className="foo">foo</Grid>);
    const box = getByTestId(GRID_DEFAULT_TEST_ID);
    expect(box.classList).toContain('foo');
  });
  it('should render default class', () => {
    const { getByTestId } = render(<Grid>foo</Grid>);
    const box = getByTestId(GRID_DEFAULT_TEST_ID);
    expect(box.classList).toContain('grid');
  });
});
