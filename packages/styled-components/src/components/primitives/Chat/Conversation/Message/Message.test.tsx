import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Message,
  WRAPPER_MESSAGE_DEFAULT_TEST_ID,
  MESSAGE_DEFAULT_TEST_ID,
} from './Message';
import { MessagePlacement, Color } from './Message.types';
import "jest-styled-components";

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
        backgroundColor={Color.Primary}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Color.Primary);
  });
  it('should render secondary 25 background color', () => {
    render(
      <Message
        backgroundColor={Color.Secondary}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Color.Secondary);
  });
  it('should render black 10 background color', () => {
    render(
      <Message
        backgroundColor={Color.Black}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Color.Black);
  });
  it('should render with left placement styles', () => {
    render(
      <Message placement={MessagePlacement.Left} text="I'm a fancy message" />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    const messageWrapper = message.parentElement;
    screen.debug();
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
  it('should render a badge indicator when there are multiple media files', async () => {
    render(<Message mediaFiles={mediaFiles.concat(mediaFiles[0])} />);
    const image = screen.getByTestId('imageContent');
    fireEvent.load(image);
    await screen.findByTestId('mediaFilesIndicator');
  });
  it('should call onClick when media is clicked', () => {
    const mockOnMediaClick = jest.fn();
    render(<Message mediaFiles={mediaFiles} onMediaClick={mockOnMediaClick} />);
    const media = screen.getByTestId('mediaWrapper');
    fireEvent.click(media);
    expect(mockOnMediaClick).toBeCalledTimes(1);
    expect(mockOnMediaClick).toBeCalledWith(mediaFiles);
  });
  it('should render mediaLoader when media is loading', () => {
    const mockOnMediaClick = jest.fn();
    render(<Message mediaFiles={mediaFiles} onMediaClick={mockOnMediaClick} />);
    screen.getByTestId('mediaLoader');
  });
  it.only('should hide image and mediaFilesIndicator when media is loading', () => {
    render(<Message mediaFiles={mediaFiles.concat(mediaFiles[0])} />);
    const image = screen.getByTestId('imageContent');
    screen.debug();
    //screen.queryByTestId('mediaFilesIndicator');
    expect(image).toHaveStyleRule('display', 'none');
  });
  it('should call onLoadMedia when media has loaded', () => {
    const mockOnLoadMedia = jest.fn();
    render(
      <Message
        mediaFiles={mediaFiles.concat(mediaFiles[0])}
        onLoadMedia={mockOnLoadMedia}
      />
    );
    const image = screen.getByTestId('imageContent');
    fireEvent.load(image);
    expect(mockOnLoadMedia).toHaveBeenCalledTimes(1);
  });
});
