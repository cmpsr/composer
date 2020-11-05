import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextField } from '.';

describe('TextField', () => {
  const testId = 'textField';
  it('should render name', () => {
    render(<TextField placeholder="placeholder" name="foo" />);
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('name', 'foo');
  });
  it('should render type', () => {
    render(<TextField placeholder="placeholder" name="name" type="text" />);
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('type', 'text');
  });
  it('should render class', () => {
    render(<TextField placeholder="placeholder" name="name" className="foo" />);
    const input = screen.getByTestId(testId);
    expect(input).toHaveClass('foo');
  });
  it('should render aria label', () => {
    render(<TextField placeholder="placeholder" name="name" ariaLabel="foo" />);
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    render(<TextField placeholder="placeholder" name="name" required />);
    const input = screen.getByTestId(testId);
    expect(input).toBeRequired();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    render(
      <TextField
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={mockOnChange}
      />
    );
    const input = screen.getByTestId(testId);
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render disabled', () => {
    render(<TextField placeholder="placeholder" name="name" disabled />);
    const input = screen.getByTestId(testId);
    expect(input).toBeDisabled();
  });
  it('should limit max length', () => {
    render(<TextField placeholder="placeholder" name="name" maxLength={3} />);
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('maxLength', '3');
  });
  it('should render inputMode', () => {
    render(
      <TextField
        placeholder="placeholder"
        name="name"
        inputMode={TextField.Modes.Numeric}
      />
    );
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('inputmode', 'numeric');
  });
});
