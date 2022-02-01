import React from 'react';
import {
  screen,
  renderWithProviders,
  fireEvent,
} from 'tests/renderWithProviders';
import { Modal } from '.';

describe('Modal', () => {
  const label = 'Label';
  const subLabel = 'SubLabel';
  const mockOnPrimaryClick = jest.fn();
  const mockOnSecondaryClick = jest.fn();
  const mockOnClose = jest.fn();

  const givenComponentRendered = ({ isOpen = false }) =>
    renderWithProviders(
      <Modal isOpen={isOpen} size="20rem" onClose={mockOnClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header label={label} subLabel={subLabel} />
          <Modal.CloseButton />
          <Modal.Body>modal content</Modal.Body>
          <Modal.Footer
            alignment="right-aligned"
            primaryAction={{
              title: 'Primary CTA',
              action: mockOnPrimaryClick,
            }}
            secondaryAction={{
              title: 'Secondary CTA',
              action: mockOnSecondaryClick,
            }}
          ></Modal.Footer>
        </Modal.Content>
      </Modal>
    );

  test('should render header', () => {
    givenComponentRendered({ isOpen: true });
    screen.getByText(label);
  });

  test('should render body', () => {
    givenComponentRendered({ isOpen: true });
    screen.getByText(/modal content/i);
  });

  test('should render footer actions', () => {
    givenComponentRendered({ isOpen: true });
    screen.getByText(/Primary CTA/i);
    screen.getByText(/Secondary CTA/i);
  });

  test('should call action when click on primary footer action', () => {
    givenComponentRendered({ isOpen: true });
    fireEvent.click(screen.getByText(/Primary CTA/i));
    expect(mockOnPrimaryClick).toBeCalledTimes(1);
  });

  test('should call action when click on secondary footer action', () => {
    givenComponentRendered({ isOpen: true });
    fireEvent.click(screen.getByText(/Secondary CTA/i));
    expect(mockOnSecondaryClick).toBeCalledTimes(1);
  });
});
