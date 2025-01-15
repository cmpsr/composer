import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  const givenComponentRendered = (isOpen = false) =>
    renderWithProviders(
      <Drawer isOpen={isOpen} onClose={jest.fn()}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.CloseButton />
          <Drawer.Header>Drawer Header Children</Drawer.Header>
          <Drawer.Body>Drawer Body Children</Drawer.Body>
          <Drawer.Footer></Drawer.Footer>
        </Drawer.Content>
      </Drawer>,
    );

  test('should render child in body and header if is open', () => {
    givenComponentRendered(true);
    screen.getByText(/Drawer Body Children/i);
    screen.getByText(/Drawer Header Children/i);
  });

  test('should not render child if no open', () => {
    givenComponentRendered(false);
    expect(screen.queryByText(/Drawer Body Children/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Drawer Header Children/i)).not.toBeInTheDocument();
  });
});
