import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MediaMessage, MEDIA_MESSAGE_DEFAULT_TEST_ID } from './MediaMessage';
import { MessageBackgroundColor, MessagePlacement } from '../Message';

describe('MediaMessage', () => {
  const mediaFiles = [{ url: 'url', contentType: 'contentType' }];
  it('should render classname', () => {
    render(<MediaMessage className="dummyClassName" mediaFiles={mediaFiles} />);
    const message = screen.getByTestId(MEDIA_MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass('dummyClassName');
  });
  it('should render text', () => {
    render(<MediaMessage text="text" mediaFiles={mediaFiles} />);
    screen.getByText('text');
  });
  it('should not render text when is not provided', () => {
    render(<MediaMessage mediaFiles={mediaFiles} />);
    expect(screen.queryByTestId('textMessage')).not.toBeInTheDocument();
  });
  it('should render primary 600 background color', () => {
    render(
      <MediaMessage
        backgroundColor={MessageBackgroundColor.Primary600}
        mediaFiles={mediaFiles}
      />
    );
    const message = screen.getByTestId('message');
    expect(message).toHaveClass(MessageBackgroundColor.Primary600);
  });
  it('should render secondary 600 background color', () => {
    render(
      <MediaMessage
        backgroundColor={MessageBackgroundColor.Secondary600}
        mediaFiles={mediaFiles}
      />
    );
    const message = screen.getByTestId('message');
    expect(message).toHaveClass(MessageBackgroundColor.Secondary600);
  });
  it('should render black 100 background color', () => {
    render(
      <MediaMessage
        backgroundColor={MessageBackgroundColor.Black100}
        mediaFiles={mediaFiles}
      />
    );
    const message = screen.getByTestId('message');
    expect(message).toHaveClass(MessageBackgroundColor.Black100);
  });
  it('should render with left placement styles', () => {
    render(
      <MediaMessage placement={MessagePlacement.Left} mediaFiles={mediaFiles} />
    );
    const message = screen.getByTestId('message');
    const messageWrapper = message.parentElement;
    expect(message).toHaveClass(
      'p-1 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left rounded-message-rounded rounded-bl-message-semirounded'
    );
    expect(messageWrapper).toHaveClass('flex mb-2 items-start justify-start');
  });
  it('should render with right placement styles', () => {
    render(
      <MediaMessage
        placement={MessagePlacement.Right}
        mediaFiles={mediaFiles}
      />
    );
    const message = screen.getByTestId('message');
    const messageWrapper = message.parentElement;
    expect(message).toHaveClass(
      'p-1 inline-block max-w-90 md:max-w-85 lg:max-w-3/4 text-left rounded-message-rounded rounded-br-message-semirounded'
    );
    expect(messageWrapper).toHaveClass('flex mb-2 items-end justify-end');
  });
  it('should render time with styles', () => {
    render(<MediaMessage time="time" mediaFiles={mediaFiles} />);
    const time = screen.getByText('time').parentElement;
    expect(time).toBeInTheDocument();
    expect(time).toHaveClass('mt-1 mb-2');
  });
  it('should render a badge indicator when there are multiple media files', () => {
    render(<MediaMessage mediaFiles={mediaFiles.concat(mediaFiles[0])} />);
    screen.getByTestId('mediaFilesIndicator');
    screen.getByText('+2');
  });
  it('should call onClick when media is clicked', () => {
    const mockOnClick = jest.fn();
    render(<MediaMessage mediaFiles={mediaFiles} onClick={mockOnClick} />);
    const media = screen.getByTestId('mediaWrapper');
    fireEvent.click(media);
    expect(mockOnClick).toBeCalledTimes(1);
    expect(mockOnClick).toBeCalledWith(mediaFiles);
  });
});
