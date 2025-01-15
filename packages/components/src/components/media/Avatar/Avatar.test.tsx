import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Avatar } from './Avatar';

interface RendererParams {
  showBadge: boolean;
}

describe('Avatar', () => {
  const givenComponentRendered = ({ showBadge }: RendererParams = { showBadge: false }) =>
    renderWithProviders(
      <Avatar
        src="https://avatars0.githubusercontent.com/u/67131017?s=200"
        name="Composer Logo"
        showBadge={showBadge}
      />,
    );

  test('should render an Avatar', () => {
    givenComponentRendered();
    screen.getByLabelText(/Composer Logo/i);
    screen.getByText('CL');
  });

  test('should not render badge', () => {
    givenComponentRendered({ showBadge: false });
    expect(screen.queryByTestId('cmpsr.avatar.badge')).toBeNull();
  });

  test('should render badge', () => {
    givenComponentRendered({ showBadge: true });
    screen.getByTestId('cmpsr.avatar.badge');
  });
});
