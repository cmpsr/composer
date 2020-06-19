import React from 'react';
import { render, screen } from '@testing-library/react';
import { favorite as Favorite } from '../../Icon/icons/action';
import { LinkItem, LINK_ITEM_DEFAULT_TEST_ID } from '..';
import { TargetOption } from '../../Link';

describe('LinkItem', () => {
  it('should render title', () => {
    render(<LinkItem title="fake title" />);
    const item = screen.getByText('fake title');
    expect(item).toBeInTheDocument();
  });
  it('should render sub-title', () => {
    render(<LinkItem subTitle="fake sub-title" />);
    const item = screen.getByText('fake sub-title');
    expect(item).toBeInTheDocument();
  });
  it('should render icon', () => {
    render(<LinkItem icon={<Favorite type="filled" />} />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
  it('should render target', () => {
    render(<LinkItem target={TargetOption.Blank} />);
    const link = screen.getByTestId(LINK_ITEM_DEFAULT_TEST_ID);
    expect(link.getAttribute('target')).toBe('_blank');
  });
  it('should render href', () => {
    render(<LinkItem route={{ slug: 'link_test' }} />);
    const link = screen.getByTestId(LINK_ITEM_DEFAULT_TEST_ID);
    expect(link.getAttribute('href')).toBe('link_test');
  });
});
