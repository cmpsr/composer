import React from 'react';
import { render } from '@testing-library/react';
import { Section, SECTION_DEFAULT_TEST_ID } from './Section';

describe('Section', () => {
  it('should render with children', () => {
    const { getByText } = render(<Section>foo</Section>);
    const section = getByText('foo');
    expect(section).toBeInTheDocument();
  });
  it('should render class', () => {
    const { getByTestId } = render(<Section className="foo">foo</Section>);
    const section = getByTestId(SECTION_DEFAULT_TEST_ID);
    expect(section.classList).toContain('foo');
  });
  it('should render default class', () => {
    const { getByTestId } = render(<Section>foo</Section>);
    const section = getByTestId(SECTION_DEFAULT_TEST_ID);
    expect(section.classList).toContain('mb-4');
  });
});
