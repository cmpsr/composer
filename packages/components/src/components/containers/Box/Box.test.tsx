import React from 'react';
import { render } from '@testing-library/react';
import { Box, BOX_DEFAULT_TEST_ID } from './Box';

describe('Box', () => {
  it('should render children', () => {
    const { getByText } = render(<Box>foo</Box>);
    const box = getByText('foo');
    expect(box).toBeInTheDocument();
  });
  it('should render class', () => {
    const { getByTestId } = render(<Box className="foo">foo</Box>);
    const box = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(box.classList).toContain('foo');
  });
  it('should render default w-screen class by type screen', () => {
    const { getByTestId } = render(<Box size="screen">foo</Box>);
    const box = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(box.classList).toContain('w-screen');
  });
  it('should render default w-full class by type full', () => {
    const { getByTestId } = render(<Box size="full">foo</Box>);
    const box = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(box.classList).toContain('w-full');
  });
  it('should render default max-w-content class by type full', () => {
    const { getByTestId } = render(<Box size="content">foo</Box>);
    const box = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(box.classList).toContain('max-w-content');
  });
});
