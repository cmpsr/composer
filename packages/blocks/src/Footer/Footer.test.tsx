import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';

import { Footer } from './Footer';

describe('Footer', () => {
  const givenComponentRendered = ({ renderCopyGroup = false, renderBottom = false } = {}) =>
    renderWithProviders(
      <Footer>
        <Footer.Logo alt="Logo" />
        <Footer.Content.Links>
          <Footer.Content.LinkGroup>
            <Footer.Content.LinkGroup.Title as="h3">Group 1</Footer.Content.LinkGroup.Title>
            <Footer.Content.LinkGroup.Link href="#">Link 1</Footer.Content.LinkGroup.Link>
            <Footer.Content.LinkGroup.Link href="#">Link 2</Footer.Content.LinkGroup.Link>
            <Footer.Content.LinkGroup.Link href="#">Link 3</Footer.Content.LinkGroup.Link>
          </Footer.Content.LinkGroup>
        </Footer.Content.Links>
        {renderCopyGroup && <span>copyGroup</span>}
        {renderBottom && <Footer.Bottom>Bottom content</Footer.Bottom>}
      </Footer>
    );

  test('should render content', () => {
    givenComponentRendered();
    screen.getByRole('img', { name: 'Logo' });
    screen.getByRole('heading', { name: 'Group 1' });
    screen.getByRole('link', { name: 'Link 1' });
    screen.getByRole('link', { name: 'Link 2' });
    screen.getByRole('link', { name: 'Link 3' });
  });
  test('should render copyGroup when provided', () => {
    givenComponentRendered({ renderCopyGroup: true });
    screen.getByText('copyGroup');
  });
  test('should render bottom content with separator', () => {
    givenComponentRendered({ renderBottom: true });
    screen.getByRole('separator');
    screen.getByText('Bottom content');
  });
});
