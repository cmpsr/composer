import React from 'react';
import { Dropdown } from '.';
import { renderWithProviders, screen } from '@tests/renderWithProviders';

describe('Dropdown', () => {
  test('should render a dropdown with all its elements', () => {
    renderWithProviders(
      <Dropdown>
        <Dropdown.Button>Open</Dropdown.Button>
        <Dropdown.List>
          <Dropdown.Item>Item 1</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    );
    screen.getByTestId('cmpsr.dropdown.button');
    screen.getByTestId('cmpsr.dropdown.list');
    screen.getByTestId('cmpsr.dropdown.item');
  });
});
