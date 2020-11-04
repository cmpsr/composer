import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Image } from './Image';
import 'jest-styled-components';

describe('Image', () => {
  const imageContentTestId = 'imageContent';
  const imageTestId = 'image';

  const imageType = {
    title: 'Image Title',
    url:
      'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
  };

  it('should render', () => {
    render(<Image image={imageType} />);
    screen.getByTestId(imageTestId);
  });
  it('should set type to image/webp', () => {
    render(<Image image={imageType} />);
    const image = screen.getByTestId(imageTestId);
    expect(image).toHaveAttribute('type', 'image/webp');
  });
  it('should add custom css class', () => {
    render(<Image image={imageType} imageClassName="foo" />);
    const image = screen.getByTestId(imageTestId);
    expect(image).toHaveClass('foo');
  });
  it('should set image source url', () => {
    render(<Image image={imageType} />);
    const image = screen.getByTestId(imageTestId);
    expect(image).toHaveAttribute('srcset', `${imageType.url}?fm=webp`);
  });
  it('should set image alt attribute', () => {
    render(<Image image={imageType} />);
    const image = screen.getByAltText(imageType.title);
    expect(image).toHaveAttribute('alt', imageType.title);
  });
  it('should call onLoad when media has loaded', () => {
    const mockOnLoad = jest.fn();
    render(<Image image={imageType} onLoad={mockOnLoad} />);
    const image = screen.getByTestId(imageContentTestId);
    fireEvent.load(image);
    expect(mockOnLoad).toHaveBeenCalledTimes(1);
  });
  it('should render custom CSS as a class', () => {
    render(<Image image={imageType} customCss="color: violet" />);
    const image = screen.getByTestId(imageContentTestId);
    expect(image).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
});
