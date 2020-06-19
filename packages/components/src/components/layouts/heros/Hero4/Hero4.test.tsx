import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Hero4 } from './Hero4';
import { BOX_DEFAULT_TEST_ID } from '../../../containers/Box';
import { IMAGE_DEFAULT_TEST_ID } from '../../../primitives/Image';

describe('Hero4', () => {
  const asset = {
    contentType: 'image',
    title: 'Image Title',
    url:
      'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
  };

  it('should match snapshot', () => {
    const hero4 = renderer.create(
      <Hero4
        title="test title"
        style={{}}
        className="foo"
        subtitle="test subtitle"
        desktopAsset={asset}
      />,
    );
    const tree = hero4.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render children', () => {
    const { getByText } = render(<Hero4 style={{}}>foo</Hero4>);
    const hero4 = getByText('foo');
    expect(hero4).toBeInTheDocument();
  });
  it('Should render with text', () => {
    const { getByText } = render(<Hero4 title="test title" style={{}} />);
    const hero4 = getByText('test title');
    expect(hero4).toBeInTheDocument();
  });
  it('Should render class', () => {
    const { getAllByTestId } = render(
      <Hero4 title="test title" style={{}} className="foo" />,
    );
    const hero4 = getAllByTestId(BOX_DEFAULT_TEST_ID);
    expect(hero4[0].classList).toContain('foo');
  });
  it('Should render desktopAsset', () => {
    const { getByTestId } = render(
      <Hero4
        title="test title"
        style={{}}
        className="foo"
        desktopAsset={asset}
      />,
    );
    const image = getByTestId(IMAGE_DEFAULT_TEST_ID) as HTMLSourceElement;
    expect(image.type).toBe('image/webp');
  });
  it('Should render mobileAsset', () => {
    const { getByTestId } = render(
      <Hero4
        title="test title"
        style={{}}
        className="foo"
        mobileAsset={asset}
      />,
    );
    const image = getByTestId(IMAGE_DEFAULT_TEST_ID) as HTMLSourceElement;
    expect(image.type).toBe('image/webp');
  });
  it('Should render subtitle', () => {
    const { getByText } = render(
      <Hero4
        title="test title"
        subtitle="test subtitle"
        style={{}}
        className="foo"
      />,
    );

    const hero4 = getByText('test subtitle');
    expect(hero4).toBeInTheDocument();
  });
  it('Should render eyebrow', () => {
    const { getByText } = render(
      <Hero4
        title="test title"
        style={{}}
        className="foo"
        eyebrow={'eyebrow test'}
      />,
    );

    const hero4 = getByText('eyebrow test');
    expect(hero4).toBeInTheDocument();
  });
});
