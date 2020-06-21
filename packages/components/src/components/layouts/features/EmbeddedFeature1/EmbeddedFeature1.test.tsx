import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { EmbeddedFeature1 } from './EmbeddedFeature1';
import { BOX_DEFAULT_TEST_ID } from '../../../containers/Box';
import { IMAGE_DEFAULT_TEST_ID } from '../../../primitives/Image';
import {
  TYPOGRAPHY_DEFAULT_TEST_ID,
  TypographyTypes,
} from '../../../primitives/Typography';

describe('EmbeddedFeature1', () => {
  it('should match snapshot', () => {
    const hero1 = renderer.create(
      <EmbeddedFeature1 style={{}} title="title test" />,
    );
    const tree = hero1.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render text', () => {
    const { getByText } = render(
      <EmbeddedFeature1 style={{}} title="title test" />,
    );
    const element = getByText('title test');
    expect(element).toBeInTheDocument();
  });
  test('should render a Box component with class', () => {
    const { getByTestId } = render(
      <EmbeddedFeature1 style={{}} title="title test" className="foo" />,
    );
    const element = getByTestId(BOX_DEFAULT_TEST_ID);
    expect(element.classList).toContain('foo');
  });
  test('should render an embeddedAsset asset', () => {
    const embeddedAsset = {
      contentType: 'image',
      title: 'Test Image',
      url: '#',
    };
    const { getByTestId } = render(
      <EmbeddedFeature1
        embeddedAsset={embeddedAsset}
        style={{}}
        title="title test"
        className="foo"
      />,
    );

    const element = getByTestId(IMAGE_DEFAULT_TEST_ID) as HTMLSourceElement;
    expect(element.type).toBe('image/webp');
  });
  test('should render a Typography component when title is added', () => {
    const embeddedAsset = {
      contentType: 'image',
      title: 'Test Image',
      url: '#',
    };
    const { getByTestId } = render(
      <EmbeddedFeature1
        embeddedAsset={embeddedAsset}
        style={{}}
        title="title test"
        className="foo"
      />,
    );
    const element = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(element.classList).toContain(TypographyTypes.Headline4);
  });
  test('should render a Typography component when eyebrow is added', () => {
    const { getByTestId } = render(
      <EmbeddedFeature1 style={{}} eyebrow="eyebrow test" className="foo" />,
    );
    const element = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(element.classList).toContain(TypographyTypes.Headline6);
  });
  test('should render a Typography component when subtitle is added', () => {
    const { getByTestId } = render(
      <EmbeddedFeature1 style={{}} subtitle="subtitle test" className="foo" />,
    );
    const element = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(element.classList).toContain(TypographyTypes.Body);
  });
});
