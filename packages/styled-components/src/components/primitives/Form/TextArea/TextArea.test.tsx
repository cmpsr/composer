import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextArea } from '.';
import 'jest-styled-components';

describe('TextArea', () => {
  const testId = 'textArea';
  it('should render element with name', () => {
    render(<TextArea placeholder="placeholder" name="text-area" />);
    const textArea = screen.getByTestId(testId);
    expect(textArea).toHaveAttribute('name', 'text-area');
  });
  it('should render class', () => {
    render(
      <TextArea placeholder="placeholder" name="text-area" className="foo" />
    );
    const textArea = screen.getByTestId(testId);
    expect(textArea).toHaveClass('foo');
  });
  it('should render custom Css', () => {
    render(
      <TextArea
        placeholder="placeholder"
        name="text-area"
        customCss="color: violet"
      />
    );
    const textArea = screen.getByTestId(testId);
    expect(textArea).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  it('should render required', () => {
    render(<TextArea placeholder="placeholder" name="text-area" required />);
    const textArea = screen.getByTestId(testId);
    expect(textArea).toBeRequired();
  });
  it('should render invalid', () => {
    render(<TextArea placeholder="placeholder" name="text-area" invalid />);
    const textArea = screen.getByTestId(testId);
    expect(textArea).toHaveClass('invalid');
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    render(
      <TextArea
        placeholder="placeholder"
        name="text-area"
        onChange={mockOnChange}
      />
    );
    const textArea = screen.getByTestId(testId);
    fireEvent.change(textArea, { target: { value: 'foo' } });
    expect(mockOnChange).toBeCalledTimes(1);
  });
});
