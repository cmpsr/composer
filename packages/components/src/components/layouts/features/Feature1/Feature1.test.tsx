import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Feature1 } from './Feature1';
import { BOX_DEFAULT_TEST_ID } from '../../../containers/Box';
import {
  TYPOGRAPHY_DEFAULT_TEST_ID,
  TypographyTypes,
} from '../../../primitives/Typography';
import { IMAGE_DEFAULT_TEST_ID } from '../../../primitives/Image';

describe('Feature1', () => {
  it('should match snapshot', () => {
    const hero1 = renderer.create(<Feature1 style={{}} title="title test" />);
    const tree = hero1.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render title', () => {
    const { getByText } = render(<Feature1 style={{}} title="title test" />);
    const element = getByText('title test');
    expect(element).toBeInTheDocument();
  });
  test('should render a Box component with class', () => {
    const { getByTestId } = render(
      <Feature1 style={{}} title="title test" className="foo" />,
    );
    const element = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(element.classList).toContain('foo');
  });
  test('should render a Typography component when eyebrow is added', () => {
    const { getAllByTestId } = render(
      <Feature1
        style={{}}
        title="title test"
        className="foo"
        eyebrow="eyebrow text"
      />,
    );
    const element = getAllByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(element[0].classList).toContain(TypographyTypes.Headline6);
  });
  test('should render a Typography component when subtitle is added', () => {
    const { getAllByTestId } = render(
      <Feature1
        style={{}}
        title="title test"
        className="foo"
        subtitle="subtitle text"
      />,
    );
    const element = getAllByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(element[1].classList).toContain(TypographyTypes.Headline6);
  });
  test('should render a Asset component when mobileAsset is added', () => {
    const mobileAsset = {
      contentType: 'image',
      title: 'Image asset',
      url: '#',
    };

    const { getByTestId } = render(
      <Feature1
        style={{}}
        title="title test"
        className="foo"
        mobileAsset={mobileAsset}
      />,
    );
    const element = getByTestId(IMAGE_DEFAULT_TEST_ID) as HTMLSourceElement;
    expect(element.type).toBe('image/webp');
  });
  test('should render a Asset component when desktopAsset is added', () => {
    const desktopAsset = {
      contentType: 'image',
      title: 'Image asset',
      url: '#',
    };

    const { getByTestId } = render(
      <Feature1
        style={{}}
        title="title test"
        className="foo"
        desktopAsset={desktopAsset}
      />,
    );
    const element = getByTestId(IMAGE_DEFAULT_TEST_ID) as HTMLSourceElement;
    expect(element.type).toBe('image/webp');
  });
});
