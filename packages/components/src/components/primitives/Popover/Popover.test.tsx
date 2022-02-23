import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { Popover } from '.';
import '@testing-library/jest-dom';

describe('Popover', () => {
  const givenComponentRendered = (isOpen = false) =>
    renderWithProviders(
      <Popover isOpen={isOpen}>
        <Popover.Content data-testid="cmpsr.popover-content">Children</Popover.Content>
      </Popover>
    );

  test('should render child if is open', () => {
    givenComponentRendered(true);
    expect(screen.queryByText(/Children/i)).toBeVisible();
  });

  test('should not render child if no open', () => {
    givenComponentRendered(false);
    expect(screen.getByTestId('cmpsr.popover-content')).not.toBeVisible();
  });
});
