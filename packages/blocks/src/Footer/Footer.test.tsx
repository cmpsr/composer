import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';

import { Footer } from './Footer';

describe('Footer', () => {
  const givenComponentRendered = ({ renderCopyGroup = false, renderBottom = false } = {}) =>
    renderWithProviders(
      <Footer>
        <Footer.Logo alt="Logo" />
        <Footer.ActionsContainer>
          <Footer.Actions title="Group 1">
            <Footer.Action href="#">Link 1</Footer.Action>
            <Footer.Action href="#">Link 2</Footer.Action>
            <Footer.Action href="#">Link 3</Footer.Action>
          </Footer.Actions>
        </Footer.ActionsContainer>
        {renderCopyGroup && <Footer.CopyGroup>copyGroup</Footer.CopyGroup>}
        {renderBottom && <Footer.Bottom>Bottom content</Footer.Bottom>}
      </Footer>,
    );

  test('should render content', () => {
    givenComponentRendered();
    screen.getByRole('img', { name: 'Logo' });
    screen.getByText('Group 1');
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
