import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Link } from './Link';
import { IconExternalLink } from '../../media/Icons';

describe('Link', () => {
  it('should render an anchor', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.id">
        Link
      </Link>,
    );
    const linkComponent = screen.getByTestId('test.id');
    expect(linkComponent.nodeName).toBe('A');
  });

  it('should render children', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.id">
        Link
      </Link>,
    );
    screen.getByText('Link');
  });

  it('should render a link with a trailing icon', () => {
    renderWithProviders(
      <Link role="link" trailingIcon={<IconExternalLink data-testid="cmpsr.link.trailing-icon" />}>
        Link
      </Link>,
    );
    screen.getByTestId('cmpsr.link.trailing-icon');
  });

  it('should render a link with a leading icon', () => {
    renderWithProviders(
      <Link role="link" leadingIcon={<IconExternalLink data-testid="cmpsr.link.leading-icon" />}>
        Link
      </Link>,
    );
    screen.getByTestId('cmpsr.link.leading-icon');
  });

  it('should render a link with leading and trailing icons', () => {
    renderWithProviders(
      <Link
        role="link"
        leadingIcon={<IconExternalLink data-testid="cmpsr.link.leading-icon" />}
        trailingIcon={<IconExternalLink data-testid="cmpsr.link.trailing-icon" />}
      >
        Link
      </Link>,
    );
    screen.getByTestId('cmpsr.link.leading-icon');
    screen.getByTestId('cmpsr.link.trailing-icon');
  });

  it('renders with inline style when isInline is true', () => {
    renderWithProviders(
      <Link role="link" isInline>
        Link
      </Link>,
    );
    const linkComponent = screen.getByRole('link');
    expect(linkComponent).toHaveStyle('display: inline');
  });

  it('should render a disabled link with the correct attributes', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.disabled-link" isDisabled>
        Disabled Link
      </Link>,
    );
    const linkComponent = screen.getByTestId('test.disabled-link');
    expect(linkComponent).toHaveAttribute('aria-disabled', 'true');
    expect(linkComponent).toHaveAttribute('tabIndex', '-1');
  });
});
