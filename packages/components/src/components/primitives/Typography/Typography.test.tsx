import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Typography,
  TypographyTypes,
  TYPOGRAPHY_DEFAULT_TEST_ID,
  TypographyMode,
  TypographyIntensity,
} from './Typography';

describe('Typography', () => {
  it('should render children', () => {
    const { getByText } = render(
      <Typography type={TypographyTypes.Headline1} tag="h1">
        foo
      </Typography>
    );
    const typography = getByText('foo');
    expect(typography).toBeInTheDocument();
  });
  it('should render class', () => {
    const { getByTestId } = render(
      <Typography type={TypographyTypes.Headline1} tag="h1">
        foo
      </Typography>
    );
    const typography = getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography.classList).toContain(TypographyTypes.Headline1);
  });
  it('should render label with htmlFor attribute', () => {
    render(
      <Typography
        type={TypographyTypes.Headline1}
        htmlFor="htmlFor"
        tag="label"
      >
        label
      </Typography>
    );
    const label = screen.getByText(/label/i);
    expect(label).toHaveAttribute('for');
    expect(label.getAttribute('for')).toBe('htmlFor');
    expect(label.nodeName).toBe('LABEL');
  });
  it('should render type', () => {
    render(
      <Typography type={TypographyTypes.Headline1} tag="h1">
        foo
      </Typography>
    );
    const typography = screen.getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toHaveClass(TypographyTypes.Headline1);
  });
  it('should render mode', () => {
    render(
      <Typography
        type={TypographyTypes.Headline1}
        mode={TypographyMode.Dark100}
        tag="h1"
      >
        foo
      </Typography>
    );
    const typography = screen.getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toHaveClass(TypographyMode.Dark100);
  });
  it('should render intensity', () => {
    render(
      <Typography
        type={TypographyTypes.Headline1}
        intensity={TypographyIntensity.Medium}
        tag="h1"
      >
        foo
      </Typography>
    );
    const typography = screen.getByTestId(TYPOGRAPHY_DEFAULT_TEST_ID);
    expect(typography).toHaveClass(TypographyIntensity.Medium);
  });
});
