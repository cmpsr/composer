import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionChild } from '.';
import 'jest-styled-components';

describe('SectionChild', () => {
  it('should render', () => {
    render(<SectionChild />);
    screen.getByTestId('sectionChild');
  });
  it('should render custom class', () => {
    render(<SectionChild className="foo" />);
    const sectionChild = screen.getByTestId('sectionChild');
    expect(sectionChild).toHaveClass('foo');
  });
  it('should render custom CSS as class', () => {
    render(<SectionChild customCss="color: violet" />);
    const sectionChild = screen.getByTestId('sectionChild');
    expect(sectionChild).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  it('should render children', () => {
    render(<SectionChild>Children</SectionChild>);
    screen.getByText('Children');
  });
});
