import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  MediaMessage,
  MediaMessageBorderColor,
  MessagePlacement,
  WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID,
} from "./MediaMessage";

describe('MediaMessage', () => {
  const fakeImage = {
    title: 'title',
    url: 'url',
  };
  it('should render image title and url', () => {
    render(<MediaMessage image={fakeImage} />);
    const image = screen.getByAltText('title');
    expect(image.getAttribute('src')).toBe('url');
  });
  it('should render primary 25 border color', () => {
    render(<MediaMessage
      image={fakeImage}
      borderColor={MediaMessageBorderColor.Primary25}
    />);
    const imageWrapper = screen.getByRole('button');
    expect(imageWrapper).toHaveClass(MediaMessageBorderColor.Primary25);
  });
  it('should render secondary 25 border color', () => {
    render(<MediaMessage
      image={fakeImage}
      borderColor={MediaMessageBorderColor.Secondary25}
    />);
    const imageWrapper = screen.getByRole('button');
    expect(imageWrapper).toHaveClass(MediaMessageBorderColor.Secondary25);
  });
  it('should render black 10 border color', () => {
    render(<MediaMessage
      image={fakeImage}
      borderColor={MediaMessageBorderColor.Black10}
    />);
    const imageWrapper = screen.getByRole('button');
    expect(imageWrapper).toHaveClass(MediaMessageBorderColor.Black10);
  });
  it('should render left placement styles', () => {
    render(<MediaMessage
      image={fakeImage}
      placement={MessagePlacement.Left}
    />);
    const wrapper = screen.getByTestId(WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID);
    expect(wrapper).toHaveClass('items-start');
  });
  it('should render right placement styles', () => {
    render(<MediaMessage
      image={fakeImage}
      placement={MessagePlacement.Right}
    />);
    const wrapper = screen.getByTestId(WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID);
    expect(wrapper).toHaveClass('items-end');
  });
  it('should render time with styles', () => {
    render(<MediaMessage
      image={fakeImage}
      time="time"
    />);
    const time = screen.getByText('time');
    expect(time.parentElement).toHaveClass('mt-1');
  });
  it('should call onClick when click on the image', () => {
    const mockOnClick = jest.fn();
    render(<MediaMessage
      image={fakeImage}
      onClick={mockOnClick}
    />);
    const image = screen.getByAltText('title');
    fireEvent.click(image);
    expect(mockOnClick).toBeCalledTimes(1);
  })
});