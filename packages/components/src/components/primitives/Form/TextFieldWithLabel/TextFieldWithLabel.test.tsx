import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextFieldWithLabel } from '.';
import 'jest-styled-components';

describe('TextFieldWithLabel', () => {
  const testId = 'textFieldWithLabel';
  it('should render name', () => {
    givenComponentRendered({ name: 'foo' });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toHaveAttribute('name', 'foo');
  });
  it('should render type', () => {
    givenComponentRendered({ type: 'text' });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toHaveAttribute('type', 'text');
  });
  it('should render textfield class', () => {
    givenComponentRendered({ textFieldClassName: 'foo' });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toHaveClass('foo');
  });
  it('should render label class', () => {
    givenComponentRendered({ labelClassName: 'foo', label: 'label' });
    const textFieldWithLabel = screen.getByText('label');
    expect(textFieldWithLabel).toHaveClass('foo');
  });
  it('should render aria label', () => {
    givenComponentRendered({ ariaLabel: 'foo' });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    givenComponentRendered({ required: true });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toBeRequired();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onChange: mockOnChange });
    const textFieldWithLabel = screen.getByTestId(testId);
    fireEvent.change(textFieldWithLabel, { target: { value: 'new value' } });
    expect(mockOnChange).toBeCalled();
  });
  it('should render disabled', () => {
    givenComponentRendered({ disabled: true });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toBeDisabled();
  });
  it('should restrict input to maximum length specified', () => {
    givenComponentRendered({ maxLength: 10 });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toHaveAttribute('maxlength', '10');
  });
  it('should render label', () => {
    givenComponentRendered({ label: 'foo' });
    screen.getByText('foo');
  });
  it('should render inputMode', () => {
    givenComponentRendered({ inputMode: TextFieldWithLabel.Modes.Numeric });
    const textFieldWithLabel = screen.getByTestId(testId);
    expect(textFieldWithLabel).toHaveAttribute('inputmode', 'numeric');
  });
  it('should render label custom css', () => {
    givenComponentRendered({ labelCustomCss: 'color: violet' });
    const label = screen.getByTestId('typography');
    expect(label).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  it('should render textfield custom css', () => {
    givenComponentRendered({ textFieldCustomCss: 'color: violet' });
    const textField = screen.getByTestId('textFieldWithLabel');
    expect(textField).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <TextFieldWithLabel label="foo" name="foo" placeholder="foo" {...props} />
    );
});
