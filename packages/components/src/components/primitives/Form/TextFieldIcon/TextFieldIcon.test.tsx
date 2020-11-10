import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextFieldIcon } from '.';
import 'jest-styled-components';

describe('TextFieldIcon', () => {
  const testId = 'textFieldIcon';
  it('should render name', () => {
    givenComponentRendered({ name: 'foo' });
    const textFieldIcon = screen.getByTestId(testId);
    expect(textFieldIcon).toHaveAttribute('name', 'foo');
  });
  it('should render type', () => {
    givenComponentRendered({ type: 'text' });
    const textFieldIcon = screen.getByTestId(testId);
    expect(textFieldIcon).toHaveAttribute('type', 'text');
  });
  it('should render class', () => {
    givenComponentRendered({ className: 'foo' });
    const textFieldIcon = screen.getByTestId(testId);
    expect(textFieldIcon).toHaveClass('foo');
  });
  it('should render wrapper class', () => {
    givenComponentRendered({ wrapperClassName: 'foo' });
    const textFieldIcon = screen.getByTestId(testId).parentElement;
    expect(textFieldIcon).toHaveClass('foo');
  });
  it('should render aria label', () => {
    givenComponentRendered({ ariaLabel: 'foo' });
    const textFieldIcon = screen.getByTestId(testId);
    expect(textFieldIcon).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    givenComponentRendered({ required: true });
    const textFieldIcon = screen.getByTestId(testId);
    expect(textFieldIcon).toBeRequired();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onChange: mockOnChange });
    const textFieldIcon = screen.getByTestId(testId);
    fireEvent.change(textFieldIcon, { target: { value: 'new value' } });
    expect(mockOnChange).toBeCalledTimes(1);
  });
  it('should render icon on left', () => {
    givenComponentRendered({ iconPosition: TextFieldIcon.IconPositions.Left });
    const icon = screen.getByTestId('icon').parentElement;
    expect(icon).toHaveClass(TextFieldIcon.IconPositions.Left);
  });
  it('should render icon on right', () => {
    givenComponentRendered({ iconPosition: TextFieldIcon.IconPositions.Right });
    const icon = screen.getByTestId('icon').parentElement;
    expect(icon).toHaveClass(TextFieldIcon.IconPositions.Right);
  });
  it('should render notFocused class by default', () => {
    givenComponentRendered();
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('notFocused');
  });
  it('should render custom css', () => {
    givenComponentRendered({ customCss: 'color: violet' });
    const textFieldIcon = screen.getByTestId(testId);
    expect(textFieldIcon).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  it('should render wrapper custom css', () => {
    givenComponentRendered({ wrapperCustomCss: 'color: violet' });
    const wrapper = screen.getByTestId(testId).parentElement;
    expect(wrapper).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <TextFieldIcon
        name="foo"
        placeholder="foo"
        onChange={() => {}}
        {...props}
      />
    );
});
