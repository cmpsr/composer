import React from 'react';
import { render, screen } from '@testing-library/react';
import { favorite as Favorite, Icon } from 'components/primitives/Icon';
import { LinkItem } from '.';
import { Link } from '../../../Link';

describe('LinkItem', () => {
  const testId = 'linkItem';
  it('should render title', () => {
    render(<LinkItem title="foo" />);
    screen.getByText('foo');
  });
  it('should render sub-title', () => {
    render(<LinkItem subTitle="foo" />);
    screen.getByText('foo');
  });
  it('should render icon', () => {
    render(<LinkItem icon={<Favorite type={Icon.Types.Filled} />} />);
    screen.getByTestId('icon');
  });
  it('should render target', () => {
    render(<LinkItem target={Link.Target.Blank} />);
    const linkItem = screen.getByTestId(testId);
    expect(linkItem).toHaveAttribute('target', '_blank');
  });
  it('should render href', () => {
    render(<LinkItem route={{ slug: 'link_test' }} />);
    const linkItem = screen.getByTestId(testId);
    expect(linkItem).toHaveAttribute('href', 'link_test');
  });
});
