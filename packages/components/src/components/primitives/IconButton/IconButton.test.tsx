import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { IconButton, IconCloud } from '@components';

describe('IconButton', () => {
  test('should render icon', () => {
    renderWithProviders(<IconButton aria-label="icon" icon={<IconCloud data-testid="cmpsr.icon-button.icon" />} />);
    screen.getByTestId('cmpsr.icon-button.icon');
  });
});
