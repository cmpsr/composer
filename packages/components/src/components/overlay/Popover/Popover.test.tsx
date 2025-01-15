import React from 'react';
import { Popover } from './Popover';
import { renderWithProviders, screen } from '@tests/renderWithProviders';

describe('Popover', () => {
  it('should render all Popover elements', () => {
    renderWithProviders(
      <Popover>
        <Popover.Trigger>
          <button>Trigger</button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Header</Popover.Header>
          <Popover.Body>Body</Popover.Body>
          <Popover.Footer>Footer</Popover.Footer>
        </Popover.Content>
      </Popover>,
    );

    screen.getByText('Trigger');
    screen.getByText('Header');
    screen.getByText('Body');
    screen.getByText('Footer');
  });
});
