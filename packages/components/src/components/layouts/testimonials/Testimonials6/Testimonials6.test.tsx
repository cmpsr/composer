import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Testimonials6, TESTIMONIAL6_PLAN_DEFAULT_TEST_ID } from '.';

describe('Testimonials6', () => {
  const testimonial =
    'I realized up there that our planet is not infinite. It’s fragile.';
  const author = 'Testing author,';
  const profession = 'Testing profession.';

  it('should match snapshot', () => {
    const testimonial6 = renderer.create(
      <Testimonials6
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );

    const tree = testimonial6.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render component', () => {
    const { getByTestId } = render(
      <Testimonials6
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial6 = getByTestId(TESTIMONIAL6_PLAN_DEFAULT_TEST_ID);
    expect(testimonial6).toBeInTheDocument();
  });
  it('should render testimonial', () => {
    const { getByText } = render(
      <Testimonials6
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial6 = getByText(testimonial);
    expect(testimonial6).toBeInTheDocument();
  });
  it('should render author', () => {
    const { getByText } = render(
      <Testimonials6
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial6 = getByText(author);
    expect(testimonial6).toBeInTheDocument();
  });
  it('should render profession', () => {
    const { getByText } = render(
      <Testimonials6
        testimonial={testimonial}
        author={author}
        profession={profession}
      />,
    );
    const testimonial6 = getByText(profession);
    expect(testimonial6).toBeInTheDocument();
  });
});
