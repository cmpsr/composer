import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { CheckBox } from '.';

describe('CheckBox', () => {
  const testId = 'checkbox';
  it('should render aria label', () => {
    render(<CheckBox ariaLabel={'foo'} />);
    const checkBox = screen.getByTestId(testId);
    expect(checkBox).toHaveAttribute('aria-label', 'foo');
  });
  it('should render name', () => {
    render(<CheckBox name="foo" />);
    const checkBox = screen.getByTestId(testId);
    expect(checkBox).toHaveAttribute('name', 'foo');
  });
  it('should render disabled', () => {
    render(<CheckBox disabled />);
    const checkBox = screen.getByTestId(testId);
    expect(checkBox).toBeDisabled();
  });
  it('should render label', () => {
    render(<CheckBox label="foo" />);
    screen.getByText('foo');
  });
  it('should render icon when checked', () => {
    render(<CheckBox checked />);
    screen.getByTestId('icon');
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    render(<CheckBox onChange={mockOnChange} />);
    const checkBox = screen.getByTestId(testId);
    fireEvent.click(checkBox);
    expect(mockOnChange).toBeCalledTimes(1);
  });
});
