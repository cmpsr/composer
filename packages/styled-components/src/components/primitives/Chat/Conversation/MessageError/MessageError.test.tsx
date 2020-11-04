import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MessageError } from '.';
import 'jest-styled-components';

describe('MessageError', () => {
  const testId = 'messageError';
  it('should render class', () => {
    render(<MessageError className="foo" text="I'm a fancy message" />);
    const message = screen.getByTestId(testId);
    expect(message).toHaveClass('foo');
  });
  it('should render text', () => {
    render(<MessageError text="I'm a fancy message" />);
    screen.getByText("I'm a fancy message");
  });
  it('should render error text', () => {
    render(<MessageError errorText="errorText" text="I'm a fancy message" />);
    screen.getByText('errorText');
  });
  it('should render with left placement styles', () => {
    render(
      <MessageError placement={MessageError.Placements.Left} text="I'm a fancy message" />
    );
    const message = screen.getByTestId(testId);
    expect(message).toHaveClass(MessageError.Placements.Left);
  });
  it('should render with right placement styles', () => {
    render(
      <MessageError placement={MessageError.Placements.Right} text="I'm a fancy message" />
    );
    const message = screen.getByTestId(testId);
    expect(message).toHaveClass(MessageError.Placements.Right);
  });
  it('should call onError when click on errorIcon/errorText', () => {
    const mockOnErrorClick = jest.fn();
    render(
      <MessageError
        errorText="errorText"
        onErrorClick={mockOnErrorClick}
        text="I'm a fancy message"
      />
    );
    const errorText = screen.getByText('errorText').parentElement;
    const errorIcon = screen.getByTestId('errorIcon');
    fireEvent.click(errorText);
    fireEvent.click(errorIcon);
    expect(mockOnErrorClick).toBeCalledTimes(2);
  });
});
