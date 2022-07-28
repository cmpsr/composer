import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Footer } from './Footer';

describe('Footer', () => {
  const defaultProps = {
    linkGroups: [
      {
        title: 'Group 1',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
      {
        title: 'Group 2',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
      {
        title: 'Group 3',
        items: [
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
          { children: 'Default Link', href: '#' },
        ],
      },
    ],
  };
  const givenComponentRendered = (props = {}, renderBottom = false) =>
    renderWithProviders(
      <Footer {...defaultProps} {...props}>
        <Footer.Logo alt="Logo" />
        {renderBottom && <Footer.Bottom>Bottom content</Footer.Bottom>}
      </Footer>
    );

  test('should render content', () => {
    givenComponentRendered();
    screen.getByRole('img', { name: 'Logo' });
  });
  test('should render copyGroup when provided', () => {
    givenComponentRendered({ copyGroup: <span>copyGroup</span> });
    screen.getByText('copyGroup');
  });
  test('should render bottom content with separator', () => {
    givenComponentRendered({}, true);
    screen.getByRole('separator');
    screen.getByText('Bottom content');
  });
});
