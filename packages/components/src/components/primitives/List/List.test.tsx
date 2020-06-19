import React from 'react';
import { render, screen } from '@testing-library/react';
import { List } from '.';

describe('List', () => {
  it('should render children', () => {
    render(<List>foo</List>);
    const list = screen.getByText('foo');
    expect(list).toBeInTheDocument();
  });
  it('should render class', () => {
    render(<List className="foo">fake</List>);
    const list = screen.getByText('fake');
    expect(list.classList).toContain('foo');
  });
});
