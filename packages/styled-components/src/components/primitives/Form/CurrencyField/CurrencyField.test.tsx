import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CurrencyField } from '.';
import 'jest-styled-components';

describe('CurrencyField', () => {
  const testId = 'currencyField';
  it('should render name', () => {
    givenComponentRendered();
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('name', 'currency-field');
  });
  it('should render class', () => {
    givenComponentRendered({ className: 'foo' });
    const input = screen.getByTestId(testId);
    expect(input).toHaveClass('foo');
  });
  it('should render type', () => {
    givenComponentRendered({ type: 'text' });
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('type', 'text');
  });
  it('should render aria label', () => {
    givenComponentRendered({ ariaLabel: 'foo' });
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    givenComponentRendered({ required: true });
    const input = screen.getByTestId(testId);
    expect(input).toBeRequired();
  });
  it('should render disabled', () => {
    givenComponentRendered({ disabled: true });
    const input = screen.getByTestId(testId);
    expect(input).toBeDisabled();
  });
  it('should render inputMode', () => {
    givenComponentRendered({ inputMode: CurrencyField.Modes.Numeric });
    const input = screen.getByTestId(testId);
    expect(input).toHaveAttribute('inputmode', 'numeric');
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ required: true, onChange: mockOnChange });
    const input = screen.getByTestId(testId);
    fireEvent.change(input, { target: { value: 3 } });
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render custom CSS as a class', () => {
    givenComponentRendered({ customCss : 'color: violet' });
    const input = screen.getByTestId(testId);
    expect(input).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });

  const givenComponentRendered = (props?: any) =>
    render(
      <CurrencyField
        name="currency-field"
        placeholder="placeholder"
        {...props}
      />
    );
});
