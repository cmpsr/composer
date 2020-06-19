import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pill, PILL_DEFAULT_TEST_ID } from '.';

describe('Pill', () => {
  it('should render label content', () => {
    render(<Pill label="TODAY" />);
    const pill = screen.getByText('TODAY');
    expect(pill).toBeInTheDocument();
  });
  it('should render className', () => {
    render(<Pill label="TODAY" className="foo" />);
    const pill = screen.getByTestId(PILL_DEFAULT_TEST_ID);
    expect(pill.classList).toContain('foo');
  });
});
