import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link, LinkTypes, LINK_DEFAULT_TEST_ID, TargetOption } from './Link';
import { Typography, TypographyTypes } from '../Typography';

describe('Link', () => {
  it('should render correctly with text', () => {
    render(
      <Link route={{ slug: 'link_test' }}>
        <Typography tag="span" type={TypographyTypes.Link}>
          Link test
        </Typography>
      </Link>
    );
    screen.getByText('Link test');
  });
  it('should render correctly without slug', () => {
    render(
      <Link>
        <Typography tag="span" type={TypographyTypes.Link}>
          Link test
        </Typography>
      </Link>
    );
    screen.getByText('Link test');
  });
  it('should render class', () => {
    render(
      <Link className="foo" type={LinkTypes.Primary}>
        <Typography tag="span" type={TypographyTypes.Link}>
          Link test
        </Typography>
      </Link>
    );
    const link = screen.getByTestId(LINK_DEFAULT_TEST_ID);
    expect(link).toHaveClass('foo');
  });
  it('should render href', () => {
    render(
      <Link route={{ slug: 'link_test' }}>
        <Typography tag="span" type={TypographyTypes.Link}>
          Link test
        </Typography>
      </Link>
    );
    const link = screen.getByTestId(LINK_DEFAULT_TEST_ID);
    expect(link.getAttribute('href')).toBe('link_test');
  });
  it('should render class type primary-button', () => {
    render(
      <Link className="foo" type={LinkTypes.Primary}>
        <Typography tag="span" type={TypographyTypes.Link}>
          Link test
        </Typography>
      </Link>
    );
    const link = screen.getByTestId(LINK_DEFAULT_TEST_ID);
    expect(link).toHaveClass('primary-btn');
  });
  it('should render target', () => {
    render(<Link target={TargetOption.Blank} />);
    const link = screen.getByTestId(LINK_DEFAULT_TEST_ID);
    expect(link.getAttribute('target')).toBe('_blank');
  });
});
