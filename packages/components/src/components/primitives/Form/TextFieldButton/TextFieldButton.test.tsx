import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextFieldButton } from './TextFieldButton';
import 'jest-styled-components';

describe('TextFieldButtonButton', () => {
  const testId = 'textFieldButton';
  it('should render name', () => {
    givenComponentRendered({ name: 'foo' });
    const textFieldButton = screen.getByTestId(testId).firstChild;
    expect(textFieldButton).toHaveAttribute('name', 'foo');
  });
  it('should render type', () => {
    givenComponentRendered({ type: 'text' });
    const textFieldButton = screen.getByTestId(testId).firstChild;
    expect(textFieldButton).toHaveAttribute('type', 'text');
  });
  it('should render class', () => {
    givenComponentRendered({ className: 'foo' });
    const textFieldButton = screen.getByTestId(testId).firstChild;
    expect(textFieldButton).toHaveClass('foo');
  });
  it('should render aria label', () => {
    givenComponentRendered({ ariaLabel: 'foo' });
    const textFieldButton = screen.getByTestId(testId).firstChild;
    expect(textFieldButton).toHaveAttribute('aria-label', 'foo');
  });
  it('should render required', () => {
    givenComponentRendered({ required: true });
    const textFieldButton = screen.getByTestId(testId).firstChild;
    expect(textFieldButton).toBeRequired();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onChange: mockOnChange });
    const textFieldButton = screen.getByTestId(testId).firstChild;
    fireEvent.change(textFieldButton, { target: { value: 'new value' } });
    expect(mockOnChange).toBeCalled();
  });
  it('should custom css', () => {
    givenComponentRendered({ customCss: 'color: violet' });
    const textFieldButton = screen.getByTestId(testId).firstChild;
    expect(textFieldButton).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  const givenComponentRendered = (props?: any) =>
    render(<TextFieldButton name="foo" placeholder="foo" {...props} />);
});
