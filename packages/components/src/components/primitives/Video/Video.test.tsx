import React from 'react';
import { render } from '@testing-library/react';
import { Video, VIDEO_DEFAULT_TEST_ID } from './Video';

describe('Video', () => {
  it('should render correctly with url', () => {
    const { getByTestId } = render(<Video video={{ url: '#' }} />);
    const video = getByTestId(VIDEO_DEFAULT_TEST_ID);
    expect(video.children.length).toBe(0);
  });
  it('should render class', () => {
    const { getByTestId } = render(
      <Video video={{ url: '#' }} className="foo" />,
    );
    const video = getByTestId(VIDEO_DEFAULT_TEST_ID);
    expect(video.classList).toContain('foo');
  });
  it('should render src', () => {
    const { getByTestId } = render(
      <Video video={{ url: '#' }} className="foo" />,
    );
    const video = getByTestId(VIDEO_DEFAULT_TEST_ID);
    expect(video.getAttribute('src')).toBe('#');
  });
  it('should add controls to the video', () => {
    const { getByTestId } = render(
      <Video video={{ url: '#' }} className="foo" controls={true} />,
    );
    const video = getByTestId(VIDEO_DEFAULT_TEST_ID) as HTMLVideoElement;
    expect(video.controls).toBe(true);
  });
  it('should add autoplay to the video', () => {
    const { getByTestId } = render(
      <Video video={{ url: '#' }} className="foo" autoPlay={true} />,
    );
    const video = getByTestId(VIDEO_DEFAULT_TEST_ID) as HTMLVideoElement;
    expect(video.autoplay).toBe(true);
  });
});
