import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Modal } from '.';
import '@testing-library/jest-dom';

describe('Modal', () => {
  const givenComponentRendered = (isOpen = false) =>
    renderWithProviders(
      <Modal isOpen={isOpen} size="auto" onClose={jest.fn()}>
        Children
      </Modal>,
    );

  test('should render child if is open', () => {
    givenComponentRendered(true);
    screen.getByText(/Children/i);
  });

  test('should not render child if no open', () => {
    givenComponentRendered(false);
    expect(screen.queryByText(/Children/i)).not.toBeInTheDocument();
  });
});
