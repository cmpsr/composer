import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Link } from './Link';
import { linkSizes } from './types';
import { IconExternalLink } from '../../primitives/Icons';

describe('Link', () => {
  it('should render an anchor', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.id">
        Link
      </Link>
    );
    const linkComponent = screen.getByTestId('test.id');
    expect(linkComponent.nodeName).toBe('A');
  });

  it('should render children', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.id">
        Link
      </Link>
    );
    screen.getByText('Link');
  });

  it.each(linkSizes)(`should render the right containers for the size %s`, (size) => {
    const component = TestRenderer.create(
      <Link size={size} href="#" role="link">
        Link
      </Link>
    ).root;

    const linkContainer = component.findByProps({
      'data-testid': 'cmpsr.link.container',
    });
    expect(linkContainer.props.size).toEqual(size);
  });

  it('should render a link with a trailing icon', () => {
    renderWithProviders(
      <Link role="link" trailingIcon={<IconExternalLink data-testid="cmpsr.link.trailing-icon" />}>
        Link
      </Link>
    );
    screen.getByTestId('cmpsr.link.trailing-icon');
  });

  it('should render a link with a leading icon', () => {
    renderWithProviders(
      <Link role="link" leadingIcon={<IconExternalLink data-testid="cmpsr.link.leading-icon" />}>
        Link
      </Link>
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
      </Link>
    );
    screen.getByTestId('cmpsr.link.leading-icon');
    screen.getByTestId('cmpsr.link.trailing-icon');
  });
});
