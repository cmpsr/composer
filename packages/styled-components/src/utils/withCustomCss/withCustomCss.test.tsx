import React from 'react';
import { withCustomCss } from '.';
import styled from 'styled-components';
import { render, screen } from '@testing-library/react';

describe('withCustomCss', () => {
  const Component = withCustomCss(
    styled.div`
      color: black;
    `
  );
  it('should render custom class', () => {
    render(<Component css="background-color: black;" data-testid="testid" />);
    const component = screen.getByTestId('testid');
    expect(component).toHaveClass('custom');
  });
  it('should not render custom class if not custom css provided', () => {
    render(<Component data-testid="testid" />);
    const component = screen.getByTestId('testid');
    expect(component).not.toHaveClass('custom');
  });
  it('should render given class', () => {
    render(<Component data-testid="testid" className="foo" css="css" />);
    const component = screen.getByTestId('testid');
    expect(component).toHaveClass('foo');
  });
});
