import React from 'react';
import { Popover } from '.';
import { renderWithProviders, screen, waitFor } from '@tests/renderWithProviders';
import '@testing-library/jest-dom';
import { Button } from '@chakra-ui/react';

describe('Popover', () => {
  test('should open popover when trigger is clicked', async () => {
    renderWithProviders(
      <Popover>
        <Popover.Trigger>
          <Button data-testid="cmpsr.trigger.button">Trigger</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Confirmation!</Popover.Header>
          <Popover.Body>Hello from inside the popover!</Popover.Body>
        </Popover.Content>
      </Popover >
    );
    const triggerButton = screen.getByTestId("cmpsr.trigger.button");
    triggerButton.click();
    await (waitFor(() => expect(screen.getByText(/Hello from inside the popover!/i)).toBeVisible()));
  })
});
