import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, renderWithProviders } from 'tests/renderWithProviders';

import { Link } from './Link';
import { linkSizes } from './types';
import { IconExternalLink } from '../Icons';

describe('Sizes', () => {
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

  it.each(linkSizes)(
    `should render the right containers for the size %s`,
    (size) => {
      const component = TestRenderer.create(
        <Link size={size} href="#" role="link">
          Link
        </Link>
      ).root;

      const linkContainer = component.findByProps({
        'data-testid': 'cmpsr.link.container',
      });
      expect(linkContainer.props.size).toEqual(size);
    }
  );
});

describe('Link and icon components', () => {
  it('should render', () => {
    renderWithProviders(<Link data-testid="test.id" />);
    screen.getByTestId('test.id');
  });

  it('should render a link with an icon on the right side', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.id" rightIcon={IconExternalLink}>
        Link
      </Link>
    );
    screen.getByTestId('cmpsr.link.right-icon');
  });

  it('should render a link with an icon on the left side', () => {
    renderWithProviders(
      <Link role="link" data-testid="test.id" leftIcon={IconExternalLink}>
        Link
      </Link>
    );
    screen.getByTestId('cmpsr.link.left-icon');
  });
});
