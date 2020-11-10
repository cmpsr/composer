import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';
import 'jest-styled-components';

describe('Grid', () => {
  it('should render', () => {
    render(<Grid />);
    screen.getByTestId('grid');
  });
  it('should render children', () => {
    render(<Grid>foo</Grid>);
    screen.getByText('foo');
  });
  it('should render custom class', () => {
    const { getByTestId } = render(<Grid className="foo">foo</Grid>);
    const grid = getByTestId('grid');
    expect(grid).toHaveClass('foo');
  });
  it('should render custom CSS as a class', () => {
    const { getByTestId } = render(<Grid customCss="color: violet">foo</Grid>);
    const grid = getByTestId('grid');
    expect(grid).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
});
