import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Hero5 } from './Hero5';
import { BOX_DEFAULT_TEST_ID } from '../../../containers/Box';
import { IMAGE_DEFAULT_TEST_ID } from '../../../primitives/Image';

describe('Hero5', () => {
  const asset = {
    contentType: 'image',
    title: 'Image Title',
    url:
      'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
  };

  it('should match snapshot', () => {
    const hero5 = renderer.create(
      <Hero5
        title="test title"
        style={{}}
        className="foo"
        subtitle="test subtitle"
        desktopAsset={asset}
      />,
    );
    const tree = hero5.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render children', () => {
    const { getByText } = render(<Hero5 style={{}}>foo</Hero5>);
    const hero5 = getByText('foo');
    expect(hero5).toBeInTheDocument();
  });
  it('Should render with text', () => {
    const { getByText } = render(<Hero5 title="test title" style={{}} />);
    const hero5 = getByText('test title');
    expect(hero5).toBeInTheDocument();
  });
  it('Should render class', () => {
    const { getAllByTestId } = render(
      <Hero5 title="test title" style={{}} className="foo" />,
    );
    const hero5 = getAllByTestId(BOX_DEFAULT_TEST_ID);
    expect(hero5[0].classList).toContain('foo');
  });
  it('Should render desktopAsset', () => {
    const { getByTestId } = render(
      <Hero5
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
      <Hero5
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
      <Hero5
        title="test title"
        subtitle="test subtitle"
        style={{}}
        className="foo"
      />,
    );

    const hero5 = getByText('test subtitle');
    expect(hero5).toBeInTheDocument();
  });
  it('Should render eyebrow', () => {
    const { getByText } = render(
      <Hero5
        title="test title"
        style={{}}
        className="foo"
        eyebrow={'eyebrow test'}
      />,
    );

    const hero5 = getByText('eyebrow test');
    expect(hero5).toBeInTheDocument();
  });
});
