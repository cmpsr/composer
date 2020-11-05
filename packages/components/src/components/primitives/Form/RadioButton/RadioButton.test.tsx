import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton } from '.';

describe('RadioButton', () => {
  const testId = 'radioButton';
  it('should render aria label', () => {
    render(<RadioButton ariaLabel={'foo'} />);
    const radio = screen.getByTestId(testId);
    expect(radio).toHaveAttribute('aria-label', 'foo');
  });
  it('should render name', () => {
    render(<RadioButton name="foo" />);
    const radio = screen.getByTestId(testId);
    expect(radio).toHaveAttribute('name', 'foo');
  });
  it('should render disabled', () => {
    render(<RadioButton disabled />);
    const radio = screen.getByTestId(testId);
    expect(radio).toBeDisabled();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    render(<RadioButton onChange={mockOnChange} />);
    const radio = screen.getByTestId(testId);
    fireEvent.click(radio);
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render label', () => {
    render(<RadioButton label="foo" />);
    screen.getByText('foo');
  });
});
