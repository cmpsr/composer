import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MessageError, MESSAGE_ERROR_DEFAULT_TEST_ID } from './MessageError';
import { MessagePlacement, WRAPPER_MESSAGE_DEFAULT_TEST_ID } from '../Message';

describe('MessageError', () => {
  it('should render classname', () => {
    render(
      <MessageError className="dummyClassName" text="I'm a fancy message" />
    );
    const messageError = screen.getByTestId(MESSAGE_ERROR_DEFAULT_TEST_ID);
    expect(messageError).toHaveClass('dummyClassName');
  });
  it('should render text', () => {
    render(<MessageError text="I'm a fancy message" />);
    const messageError = screen.getByText("I'm a fancy message");
    expect(messageError).toBeInTheDocument();
  });
  it('should render with left placement proper classes', () => {
    render(
      <MessageError
        placement={MessagePlacement.Left}
        errorText="errorText"
        text="I'm a fancy message"
      />
    );
    const wrapper = screen.getByTestId(MESSAGE_ERROR_DEFAULT_TEST_ID);
    const message = screen.getByTestId(WRAPPER_MESSAGE_DEFAULT_TEST_ID);
    const iconWrapper = screen.getByTestId('errorIcon');
    const icon = screen.getByTestId('errorIcon').firstChild;
    const description = screen.getByTestId(MESSAGE_ERROR_DEFAULT_TEST_ID)
      .lastElementChild;
    expect(wrapper).toHaveClass('flex flex-col items-start');
    expect(message).toHaveClass('order-2');
    expect(iconWrapper).toHaveClass('mb-2 order-1 mr-1');
    expect(icon).toHaveClass(
      'text-fill-system-error fill-current cursor-pointer'
    );
    expect(description).toHaveClass('mb-2 select-none cursor-pointer');
  });
  it('should render with right placement proper classes', () => {
    render(
      <MessageError
        placement={MessagePlacement.Right}
        errorText="errorText"
        text="I'm a fancy message"
      />
    );
    const wrapper = screen.getByTestId(MESSAGE_ERROR_DEFAULT_TEST_ID);
    const message = screen.getByTestId(WRAPPER_MESSAGE_DEFAULT_TEST_ID);
    const iconWrapper = screen.getByTestId('errorIcon');
    const icon = screen.getByTestId('errorIcon').firstChild;
    const description = screen.getByTestId(MESSAGE_ERROR_DEFAULT_TEST_ID)
      .lastElementChild;
    expect(wrapper).toHaveClass('flex flex-col items-end');
    expect(message).toHaveClass('order-1');
    expect(iconWrapper).toHaveClass('mb-2 order-2 ml-1');
    expect(icon).toHaveClass(
      'text-fill-system-error fill-current cursor-pointer'
    );
    expect(description).toHaveClass('mb-2 select-none cursor-pointer');
  });
  it('should render error text', () => {
    render(<MessageError errorText="errorText" text="I'm a fancy message" />);
    const messageError = screen.getByText('errorText');
    expect(messageError).toBeInTheDocument();
  });
  it('should call onError when click on errorIcon/errorText', () => {
    const mockError = jest.fn();
    render(
      <MessageError
        errorText="errorText"
        onErrorClick={mockError}
        text="I'm a fancy message"
      />
    );
    const errorText = screen.getByText('errorText').parentElement;
    const errorIcon = screen.getByTestId('errorIcon');
    fireEvent.click(errorText);
    fireEvent.click(errorIcon);
    expect(mockError).toBeCalledTimes(2);
  });
});
