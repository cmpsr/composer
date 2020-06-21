import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Testimonials5, TESTIMONIAL5_PLAN_DEFAULT_TEST_ID } from '.';
import { IMAGE_DEFAULT_TEST_ID } from 'components/primitives';

describe('Testimonials5', () => {
  const asset = {
    contentType: 'image',
    title: 'Image Title',
    url:
      'https://images.ctfassets.net/o9153kt66j4s/6Ru9unmOhMXrFwKtLV2SRU/7c902fd189741be40f5fef77340cbf1d/placeholder.svg',
  };
  const testimonial =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut, omnis, maxime rem, cum similique repellendus hic impedit totam magnam deserunt voluptatum quia! Blanditiis repellendus sit debitis doloribus, totam minima?';
  const author = 'Testing author,';
  const profession = 'Testing profession.';

  it('should match snapshot', () => {
    const testimonial5 = renderer.create(
      <Testimonials5
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );

    const tree = testimonial5.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(
      <Testimonials5
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial5 = getByTestId(TESTIMONIAL5_PLAN_DEFAULT_TEST_ID);
    expect(testimonial5).toBeInTheDocument();
  });
  it('should render className', () => {
    const { getByTestId } = render(
      <Testimonials5
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
        className="foo"
      />,
    );

    const testimonial5 = getByTestId(TESTIMONIAL5_PLAN_DEFAULT_TEST_ID);
    expect(testimonial5.classList).toContain('foo');
  });
  it('should render rounded asset', () => {
    const { getByTestId } = render(
      <Testimonials5
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );

    const assetComponent = getByTestId(IMAGE_DEFAULT_TEST_ID);
    expect(assetComponent).toBeInTheDocument();
    expect(assetComponent.classList).toContain('rounded-full');
  });
  it('should render testimonial', () => {
    const { getByText } = render(
      <Testimonials5
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial5 = getByText(testimonial);
    expect(testimonial5).toBeInTheDocument();
  });
  it('should render author', () => {
    const { getByText } = render(
      <Testimonials5
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial5 = getByText(author);
    expect(testimonial5).toBeInTheDocument();
  });
  it('should render profession', () => {
    const { getByText } = render(
      <Testimonials5
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial5 = getByText(profession);
    expect(testimonial5).toBeInTheDocument();
  });
});
