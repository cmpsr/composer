import React from 'react';
import { render, screen } from '@testing-library/react';
import { List } from '.';

describe('List', () => {
  const testId = 'list';
  it('should render children', () => {
    render(
      <List>
        <div>foo</div>
      </List>
    );
    const list = screen.getByTestId(testId);
    expect(list.children).toHaveLength(1);
  });
  it('should render class', () => {
    render(<List className="foo"></List>);
    const list = screen.getByTestId(testId);
    expect(list).toHaveClass('foo');
  });
});
