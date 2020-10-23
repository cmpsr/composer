import React from 'react';
import { render, screen } from '@testing-library/react';
import { Video } from './Video';

describe('Video', () => {
  const testId = 'video';
  it('should render', () => {
    render(<Video video={{ url: '#' }} />);
    screen.getByTestId(testId);
  });
  it('should add custom css class', () => {
    render(<Video video={{ url: '#' }} className="foo" />);
    const video = screen.getByTestId(testId);
    expect(video).toHaveClass('foo');
  });
  it('should set src attribute', () => {
    render(<Video video={{ url: '#' }} className="foo" />);
    const video = screen.getByTestId(testId);
    expect(video).toHaveAttribute('src', '#');
  });
  it('should set controls to false by default', () => {
    render(<Video video={{ url: '#' }} className="foo" />);
    const video = screen.getByTestId(testId) as HTMLVideoElement;
    expect(video.controls).toBeFalsy();
  });
  it('should set controls', () => {
    render(<Video video={{ url: '#' }} className="foo" controls={true} />);
    const video = screen.getByTestId(testId) as HTMLVideoElement;
    expect(video.controls).toBeTruthy();
  });
  it('should not autoplay by default', () => {
    render(<Video video={{ url: '#' }} className="foo" />);
    const video = screen.getByTestId(testId) as HTMLVideoElement;
    expect(video.autoplay).toBeFalsy();
  });
  it('should set autoplay', () => {
    render(<Video video={{ url: '#' }} className="foo" autoPlay={true} />);
    const video = screen.getByTestId(testId) as HTMLVideoElement;
    expect(video.autoplay).toBeTruthy();
  });
});
