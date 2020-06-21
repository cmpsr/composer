import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './Grid';
import { BOX_DEFAULT_TEST_ID } from '../../containers/Box';
import { GRID_DEFAULT_TEST_ID } from '../../containers/Grid';

describe('Grid', () => {
  it('Should render grid with children', () => {
    const { getByText } = render(
      <Grid>
        <div>foo</div>
      </Grid>,
    );
    const grid = getByText('foo');
    expect(grid).toBeInTheDocument();
  });
  it('Should render class', () => {
    const { getByTestId } = render(
      <Grid className="foo">
        <div>foo</div>
      </Grid>,
    );
    const grid = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(grid.classList).toContain('foo');
  });
  it('Should render a grid container component', () => {
    const { getByTestId } = render(
      <Grid className="foo">
        <div>foo</div>
      </Grid>,
    );
    const grid = getByTestId(GRID_DEFAULT_TEST_ID);
    expect(grid.classList).toContain('grid');
  });
  it('Should add style grid', () => {
    const style = {
      grid: {
        sm: {
          text: 'foo',
        },
      },
    };

    const { getByTestId } = render(
      <Grid style={style}>
        <div>foo</div>
      </Grid>,
    );
    const grid = getByTestId(GRID_DEFAULT_TEST_ID);
    expect(grid.classList).toContain('sm:text-foo');
  });
});
