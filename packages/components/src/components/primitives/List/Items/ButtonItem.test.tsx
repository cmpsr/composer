import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonItem } from '..';

describe('ButtonItem', () => {
  it('should render children', () => {
    render(<ButtonItem>foo</ButtonItem>);
    const item = screen.getByText('foo');
    expect(item).toBeInTheDocument();
  });
  it('should render class', () => {
    render(<ButtonItem className="foo" />);
    const item = screen.getByTestId('button');
    expect(item.classList).toContain('foo');
  });
  it('should call onClick', () => {
    const onClick = jest.fn();
    render(<ButtonItem onClick={onClick} />);
    const item = screen.getByTestId('button');
    fireEvent.click(item);
    expect(onClick).toBeCalled();
  });
});
