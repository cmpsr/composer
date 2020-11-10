import React from 'react';
import { render, screen } from '@testing-library/react';
import { Section } from '.';
import 'jest-styled-components';

describe('Section', () => {
  it('should render with children', () => {
    render(<Section>foo</Section>);
    screen.getByText('foo');
  });
  it('should render class', () => {
    render(<Section className="foo">foo</Section>);
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('foo');
  });
  it('should render custom css', () => {
    render(<Section customCss="color: violet" />);
    const section = screen.getByTestId('section');
    expect(section).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
});
