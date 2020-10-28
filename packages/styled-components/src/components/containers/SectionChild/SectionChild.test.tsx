import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionChild } from '.';

describe('SectionChild', () => {
  it('should render', () => {
    render(<SectionChild />);
    screen.getByTestId('sectionChild');
  });
  it('should render class name', () => {
    render(<SectionChild customCss="customCss" />);
    const sectionChild = screen.getByTestId('sectionChild');
    expect(sectionChild).toHaveClass('custom');
  });
  it('should render children', () => {
    render(<SectionChild>Children</SectionChild>);
    screen.getByText('Children');
  });
});
