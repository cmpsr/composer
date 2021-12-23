import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  const givenComponentRendered = (children: React.ReactNode = null) =>
    renderWithProviders(
      <Avatar
        src="https://avatars0.githubusercontent.com/u/67131017?s=200"
        name="Composer Logo"
      >
        {children}
      </Avatar>
    );

  test('should render an Avatar', () => {
    givenComponentRendered();
    screen.getByLabelText(/Composer Logo/i);
    screen.getByText('CL');
  });

  test('should render badge', () => {
    givenComponentRendered(<Avatar.Badge>1</Avatar.Badge>);
    screen.getByText('1');
  });
});
