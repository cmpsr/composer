import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Footer } from './Footer';

describe('Footer', () => {
  const defaultProps = {
    imageProps: { src: 'https://avatars0.githubusercontent.com/u/67131017?s=200', maxWidth: '4.25rem' },
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
  const givenComponentRendered = (props?: any) => renderWithProviders(<Footer {...defaultProps} {...props} />);

  test('should render copyGroup when provided', () => {
    givenComponentRendered({ copyGroup: <span>copyGroup</span> });
    screen.getByText('copyGroup');
  });
  test('should render bottomContent when provided', () => {
    givenComponentRendered({ bottomContent: <span>bottomContent</span> });
    screen.getByText('bottomContent');
  });
});
