import React from 'react';
import { Dropdown } from '.';
import { renderWithProviders, screen } from '@tests/renderWithProviders';

describe('Dropdown', () => {
  test('should render a dropdown with all its elements', () => {
    renderWithProviders(
      <Dropdown>
        <Dropdown.Button data-testid="cmpsr.dropdown.button">Open</Dropdown.Button>
        <Dropdown.List data-testid="cmpsr.dropdown.list">
          <Dropdown.Item data-testid="cmpsr.dropdown.item">Item 1</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>,
    );
    screen.getByTestId('cmpsr.dropdown.button');
    screen.getByTestId('cmpsr.dropdown.list');
    screen.getByTestId('cmpsr.dropdown.item');
  });
});
