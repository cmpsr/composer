import React from 'react';
import { screen, renderWithProviders, fireEvent } from '@tests/renderWithProviders';
import { Modal } from '.';
import { Button, Text } from '@components';

describe('Modal', () => {
  const label = 'Label';
  const subLabel = 'SubLabel';
  const mockOnPrimaryClick = jest.fn();
  const mockOnSecondaryClick = jest.fn();
  const mockOnClose = jest.fn();

  const givenComponentRendered = ({ isOpen = false }) =>
    renderWithProviders(
      <Modal isOpen={isOpen} size="auto" onClose={mockOnClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Text>{label} </Text>
            <Text>{subLabel} </Text>
          </Modal.Header>
          <Modal.CloseButton />
          <Modal.Body>modal content</Modal.Body>
          <Modal.Footer>
            <Button onClick={mockOnPrimaryClick}>Primary CTA</Button>
            <Button onClick={mockOnSecondaryClick}>Secondary CTA</Button>
          </Modal.Footer>
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
