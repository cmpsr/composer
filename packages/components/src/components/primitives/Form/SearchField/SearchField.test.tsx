import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SearchField } from './SearchField';

describe('SearchField', () => {
  const testId = 'searchField';
  it('should render name', () => {
    givenComponentRendered({ name: 'foo' });
    const searchField = screen.getByTestId(testId).firstChild;
    expect(searchField).toHaveAttribute('name', 'foo');
  });
  it('should render type', () => {
    givenComponentRendered({ type: 'text' });
    const searchField = screen.getByTestId(testId).firstChild;
    expect(searchField).toHaveAttribute('type', 'text');
  });
  it('should render class', () => {
    givenComponentRendered({ className: 'foo' });
    const searchField = screen.getByTestId(testId).firstChild;
    expect(searchField).toHaveClass('foo');
  });
  it('should render aria label', () => {
    givenComponentRendered({ ariaLabel: 'foo' });
    const searchField = screen.getByTestId(testId).firstChild;
    expect(searchField).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    givenComponentRendered({ required: true });
    const searchField = screen.getByTestId(testId).firstChild;
    expect(searchField).toBeRequired();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onChange: mockOnChange });
    const searchField = screen.getByTestId(testId).firstChild;
    fireEvent.change(searchField, { target: { value: 'foo' } });
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render icon on left', () => {
    givenComponentRendered({ iconPosition: SearchField.IconPositions.Left });
    const icon = screen.getByTestId('icon').parentElement;
    expect(icon).toHaveClass('left');
  });
  it('should render icon position right', () => {
    givenComponentRendered({
      iconPosition: SearchField.IconPositions.Right,
    });
    const icon = screen.getByTestId('icon').parentElement;
    expect(icon).toHaveClass('right');
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <SearchField
        name="foo"
        placeholder="foo"
        onChange={() => {}}
        {...props}
      />
    );
});
