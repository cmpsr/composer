import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';
import 'jest-styled-components';

describe('Typography', () => {
  const testId = 'typography';
  it('should render with children', () => {
    render(
      <Typography>
        <div>foo</div>
      </Typography>
    );
    const typography = screen.getByTestId(testId);
    expect(typography.children).toHaveLength(1);
  });
  it('should render class', () => {
    render(<Typography className="foo">foo</Typography>);
    const typography = screen.getByTestId(testId);
    expect(typography).toHaveClass('foo');
  });
  it('should render htmlFor', () => {
    render(<Typography htmlFor="foo">foo</Typography>);
    const typography = screen.getByTestId(testId);
    expect(typography).toHaveAttribute('for', 'foo');
  });
  it('should render type', () => {
    render(<Typography type={Typography.Types.Headline1}>foo</Typography>);
    const typography = screen.getByTestId(testId);
    expect(typography).toHaveClass(Typography.Types.Headline1);
  });
  it('should render mode', () => {
    render(<Typography mode={Typography.Modes.Dark100}>foo</Typography>);
    const typography = screen.getByTestId(testId);
    expect(typography).toHaveClass(Typography.Modes.Dark100);
  });
  it('should render intensity', () => {
    render(
      <Typography intensity={Typography.Intensities.Regular}>foo</Typography>
    );
    const typography = screen.getByTestId(testId);
    expect(typography).toHaveClass(Typography.Intensities.Regular);
  });
  it('should render custom css', () => {
    render(
      <Typography customCss="color: violet">
        <div>foo</div>
      </Typography>
    );
    const typography = screen.getByTestId(testId);
    expect(typography).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
});
