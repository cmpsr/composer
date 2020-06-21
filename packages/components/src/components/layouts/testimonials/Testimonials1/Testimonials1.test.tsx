import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Testimonials1, TESTIMONIAL1_PLAN_DEFAULT_TEST_ID } from '.';
import { IMAGE_DEFAULT_TEST_ID } from 'components/primitives';

describe('Testimonials1', () => {
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
    const testimonial1 = renderer.create(
      <Testimonials1
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );

    const tree = testimonial1.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(
      <Testimonials1
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial1 = getByTestId(TESTIMONIAL1_PLAN_DEFAULT_TEST_ID);
    expect(testimonial1).toBeInTheDocument();
  });
  it('should render asset', () => {
    const { getByTestId } = render(
      <Testimonials1
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );

    const assetComponent = getByTestId(IMAGE_DEFAULT_TEST_ID);
    expect(assetComponent).toBeInTheDocument();
  });
  it('should render testimonial', () => {
    const { getByText } = render(
      <Testimonials1
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial1 = getByText(testimonial);
    expect(testimonial1).toBeInTheDocument();
  });
  it('should render author', () => {
    const { getByText } = render(
      <Testimonials1
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial1 = getByText(author);
    expect(testimonial1).toBeInTheDocument();
  });
  it('should render profession', () => {
    const { getByText } = render(
      <Testimonials1
        asset={asset}
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial1 = getByText(profession);
    expect(testimonial1).toBeInTheDocument();
  });
});
