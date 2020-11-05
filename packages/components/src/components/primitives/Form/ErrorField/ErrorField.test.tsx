import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorField } from '.';

describe('ErrorField', () => {
  it('should render error', () => {
    render(<ErrorField error="foo" />);
    screen.getByText('foo');
  });
  it('should render class', () => {
    render(<ErrorField error="error" className="foo" />);
    const errorField = screen.getByTestId('errorField');
    expect(errorField).toHaveClass('foo');
  });
});
