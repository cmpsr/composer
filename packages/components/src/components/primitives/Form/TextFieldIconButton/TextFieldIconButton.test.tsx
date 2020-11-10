import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextFieldIconButton } from '.';

describe('TextFieldIconButton', () => {
  const testId = 'textFieldIconButton';
  it('should render name', () => {
    givenComponentRendered({ name: 'foo' });
    const textFieldIconButton = screen.getByTestId(testId);
    expect(textFieldIconButton).toHaveAttribute('name', 'foo');
  });
  it('should render type', () => {
    givenComponentRendered({ type: 'text' });
    const textFieldIconButton = screen.getByTestId(testId);
    expect(textFieldIconButton).toHaveAttribute('type', 'text');
  });
  it('should render class', () => {
    givenComponentRendered({ className: 'foo' });
    const textFieldIconButton = screen.getByTestId(testId);
    expect(textFieldIconButton).toHaveClass('foo');
  });
  it('should render aria label', () => {
    givenComponentRendered({ ariaLabel: 'foo' });
    const textFieldIconButton = screen.getByTestId(testId);
    expect(textFieldIconButton).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    givenComponentRendered({ required: true });
    const textFieldIconButton = screen.getByTestId(testId);
    expect(textFieldIconButton).toBeRequired();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onChange: mockOnChange });
    const textFieldIconButton = screen.getByTestId(testId);
    fireEvent.change(textFieldIconButton, { target: { value: 'new value' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  it('should render icon on left', () => {
    givenComponentRendered({
      iconPosition: TextFieldIconButton.IconPositions.Left,
    });
    const icon = screen.getByTestId('icon').parentElement;
    expect(icon).toHaveClass(TextFieldIconButton.IconPositions.Left);
  });
  it('should render icon on right', () => {
    givenComponentRendered({
      iconPosition: TextFieldIconButton.IconPositions.Right,
    });
    const icon = screen.getByTestId('icon').parentElement;
    expect(icon).toHaveClass(TextFieldIconButton.IconPositions.Right);
  });
  it('should render notFocused class by default', () => {
    givenComponentRendered();
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('notFocused');
  });
  it('should render custom css', () => {
    givenComponentRendered({ customCss: 'color: violet' });
    const textFieldIconButton = screen.getByTestId(testId);
    expect(textFieldIconButton).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <TextFieldIconButton
        name="foo"
        placeholder="foo"
        onChange={() => {}}
        {...props}
      />
    );
});
