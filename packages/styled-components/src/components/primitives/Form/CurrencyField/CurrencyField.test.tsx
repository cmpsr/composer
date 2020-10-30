import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CurrencyField } from '.';

describe('CurrencyField', () => {
  const testId = 'currencyField';
  it('should render name', () => {
    render(<CurrencyField name="foo" placeholder="placeholder" />);
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('name', 'foo');
  });
  it('should render class', () => {
    render(
      <CurrencyField
        name="currency-field"
        className="foo"
        placeholder="placeholder"
      />
    );
    const input = screen.getByTestId(testId);
    expect(input).toHaveClass('foo');
  });
  it('should render type', () => {
    render(
      <CurrencyField
        name="currency-field"
        type="text"
        placeholder="placeholder"
      />
    );
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('type', 'text');
  });
  it('should render aria label', () => {
    render(
      <CurrencyField
        name="currency-field"
        ariaLabel="foo"
        placeholder="placeholder"
      />
    );
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    render(
      <CurrencyField name="currency-field" required placeholder="placeholder" />
    );
    const input = screen.getByTestId(testId);
    expect(input).toBeRequired();
  });
  it('should render disabled', () => {
    render(
      <CurrencyField name="currency-field" disabled placeholder="placeholder" />
    );
    const input = screen.getByTestId(testId);
    expect(input).toBeDisabled();
  });
  it('should render inputMode', () => {
    render(
      <CurrencyField
        name="currency-field"
        inputMode={CurrencyField.Modes.Numeric}
        placeholder="placeholder"
      />
    );
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('inputmode', 'numeric');
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    render(
      <CurrencyField
        name="currency-field"
        placeholder="placeholder"
        required={true}
        onChange={mockOnChange}
      />
    );
    const input = screen.getByTestId(testId);
    fireEvent.change(input, { target: { value: 3 } });
    expect(mockOnChange).toBeCalledTimes(1);
  });
});
