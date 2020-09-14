import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  MessagePlacement,
  MessageBackgroundColor,
  Message,
  WRAPPER_MESSAGE_DEFAULT_TEST_ID,
  MESSAGE_DEFAULT_TEST_ID,
} from './Message';

describe('Message', () => {
  const mediaFiles = [{ url: 'url', contentType: 'contentType' }];
  it('should render classname', () => {
    render(<Message className="dummyClassName" text="I'm a fancy message" />);
    const message = screen.getByTestId(WRAPPER_MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass('dummyClassName');
  });
  it('should render text', () => {
    render(<Message text="I'm a fancy message" />);
    const message = screen.getByText("I'm a fancy message");
    expect(message).toBeInTheDocument();
  });
  it('should render primary 25 background color', () => {
    render(
      <Message
        backgroundColor={MessageBackgroundColor.Primary600}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(MessageBackgroundColor.Primary600);
  });
  it('should render secondary 25 background color', () => {
    render(
      <Message
        backgroundColor={MessageBackgroundColor.Secondary600}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(MessageBackgroundColor.Secondary600);
  });
  it('should render black 10 background color', () => {
    render(
      <Message
        backgroundColor={MessageBackgroundColor.Black100}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(MessageBackgroundColor.Black100);
  });
  it('should render with left placement styles', () => {
    render(
      <Message placement={MessagePlacement.Left} text="I'm a fancy message" />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    const messageWrapper = message.parentElement;
    expect(message).toHaveClass(
      'p-1 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left rounded-message-rounded rounded-bl-message-semirounded'
    );
    expect(messageWrapper).toHaveClass('flex mb-2 items-start justify-start');
  });
  it('should render with right placement styles', () => {
    render(
      <Message placement={MessagePlacement.Right} text="I'm a fancy message" />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    const messageWrapper = message.parentElement;
    expect(message).toHaveClass(
      'p-1 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left rounded-message-rounded rounded-br-message-semirounded'
    );
    expect(messageWrapper).toHaveClass('flex mb-2 items-end justify-end');
  });
  it('should render time with styles', () => {
    render(<Message time="time" text="I'm a fancy message" />);
    const time = screen.getByText('time').parentElement;
    expect(time).toBeInTheDocument();
    expect(time).toHaveClass('mt-1 mb-2');
  });
  it('should render a badge indicator when there are multiple media files', () => {
    render(<Message mediaFiles={mediaFiles.concat(mediaFiles[0])} />);
    screen.getByTestId('mediaFilesIndicator');
    screen.getByText('+2');
  });
  it('should call onClick when media is clicked', () => {
    const mockOnMediaClick = jest.fn();
    render(<Message mediaFiles={mediaFiles} onMediaClick={mockOnMediaClick} />);
    const media = screen.getByTestId('mediaWrapper');
    fireEvent.click(media);
    expect(mockOnMediaClick).toBeCalledTimes(1);
    expect(mockOnMediaClick).toBeCalledWith(mediaFiles);
  });
});
