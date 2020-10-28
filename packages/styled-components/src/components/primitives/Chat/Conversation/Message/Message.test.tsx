import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Message,
} from './Message';

describe('Message', () => {
  const WRAPPER_MESSAGE_DEFAULT_TEST_ID ='wrapperMessage';
  const MESSAGE_DEFAULT_TEST_ID = 'message';
  const mediaFiles = [{ url: 'url', contentType: 'contentType' }];
  it('should render class', () => {
    render(<Message className="foo" text="I'm a fancy message" />);
    const message = screen.getByTestId(WRAPPER_MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass('foo');
  });
  it('should render text', () => {
    render(<Message text="I'm a fancy message" />);
    const message = screen.getByText("I'm a fancy message");
    expect(message).toBeInTheDocument();
  });
  
  it('should render primary color', () => {
    render(
      <Message
        color={Message.Colors.Primary}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Message.Colors.Primary);
  });
  it('should render secondary color', () => {
    render(
      <Message
        color={Message.Colors.Secondary}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Message.Colors.Secondary);
  });
  
  it('should render black color', () => {
    render(
      <Message
        color={Message.Colors.Black}
        text="I'm a fancy message"
      />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Message.Colors.Black);
  });
  it('should render with left placement styles', () => {
    render(
      <Message placement={Message.Placements.Left} text="I'm a fancy message" />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Message.Placements.Left);
  });
  it('should render with right placement styles', () => {
    render(
      <Message placement={Message.Placements.Right} text="I'm a fancy message" />
    );
    const message = screen.getByTestId(MESSAGE_DEFAULT_TEST_ID);
    expect(message).toHaveClass(Message.Placements.Right);
  });
  it('should render time with styles', () => {
    render(<Message time="time" text="I'm a fancy message" />);
    const time = screen.getByText('time').parentElement;
    expect(time).toBeInTheDocument();
    expect(time).toHaveClass('hasTime');
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
  it('should hide image and mediaFilesIndicator when media is loading', () => {
    render(<Message mediaFiles={mediaFiles.concat(mediaFiles[0])} />);
    const image = screen.getByTestId('imageContent');
    expect(image).not.toHaveClass('isMediaLoaded');
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
