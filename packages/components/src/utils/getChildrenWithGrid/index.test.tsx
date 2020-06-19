import React from 'react';

import { getChildrenWithGrid } from '.';
import { render } from '@testing-library/react';

describe('getColorClassesFromStyle', () => {
  it('should return a single value', () => {
    const input = <div>input</div>;
    const { container } = render(getChildrenWithGrid(input));

    const result = container.children[0];
    expect(result.children.length).toEqual(0);
    expect(result.className).toEqual('w-full md:w-auto');
  });
  it('should return a single value and append classes', () => {
    const input = <div className="text-primary">input</div>;
    const { container } = render(getChildrenWithGrid(input));

    const result = container.children[0];
    expect(result.children.length).toEqual(0);
    expect(result.className).toEqual('w-full md:w-auto text-primary');
  });
  it('should return a grid wrapped value', () => {
    const input = [<div key="0">input</div>, <div key="1">input</div>];
    const { container } = render(getChildrenWithGrid(input));

    const grid = container.children[0];
    expect(grid.children.length).toEqual(2);
    expect(grid.className).toEqual('grid grid-cols-2 gap-4 w-full md:w-auto');
  });
  it('should return a grid wrapped value and added classes to children', () => {
    const input = [<div key="0">input</div>, <div key="1">input</div>];
    const { container } = render(getChildrenWithGrid(input));

    const grid = container.children[0];
    expect(grid.children.length).toEqual(2);
    expect(grid.className).toEqual('grid grid-cols-2 gap-4 w-full md:w-auto');

    const child1 = grid.children[0];
    const child2 = grid.children[0];
    expect(child1.className).toEqual('w-full md:w-auto');
    expect(child2.className).toEqual('w-full md:w-auto');
  });
});
