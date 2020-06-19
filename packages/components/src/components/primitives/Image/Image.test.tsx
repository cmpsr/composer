import React from 'react';
import { render } from '@testing-library/react';
import { Image, IMAGE_DEFAULT_TEST_ID } from './Image';

describe('Image', () => {
  const imageType = {
    title: 'Image Title',
    url:
      'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
  };

  it('should render correctly', () => {
    const { getByTestId } = render(<Image image={imageType} />);
    const image = getByTestId(IMAGE_DEFAULT_TEST_ID);
    expect(image.children.length).toBe(0);
  });
  it('should render type image/webp by default', () => {
    const { getByTestId } = render(<Image image={imageType} />);
    const image = getByTestId(IMAGE_DEFAULT_TEST_ID) as HTMLSourceElement;
    expect(image.type).toBe('image/webp');
  });
  it('should render class', () => {
    const { getByTestId } = render(
      <Image image={imageType} imageClassName="foo" />,
    );
    const image = getByTestId(IMAGE_DEFAULT_TEST_ID);
    expect(image.classList).toContain('foo');
  });
  it('should add srcSet with url', () => {
    const { getByTestId } = render(<Image image={imageType} />);
    const image = getByTestId(IMAGE_DEFAULT_TEST_ID) as HTMLSourceElement;
    expect(image.srcset).toContain(imageType.url);
  });
  it('should render an image element', () => {
    const { getByAltText } = render(<Image image={imageType} />);
    const image = getByAltText(imageType.title) as HTMLImageElement;
    expect(image.alt).toBe(imageType.title);
  });
});
