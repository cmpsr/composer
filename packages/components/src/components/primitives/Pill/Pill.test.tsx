import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pill } from './Pill';

describe('Pill', () => {
  const testId = 'pill';
  it('should render label', () => {
    render(<Pill label="foo" />);
    screen.getByText('foo');
  });
  it('should render class', () => {
    render(<Pill label="foo" className="foo" />);
    const pill = screen.getByTestId(testId);
    expect(pill).toHaveClass('foo');
  });
});
