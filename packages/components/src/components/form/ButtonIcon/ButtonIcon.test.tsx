import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { ButtonIcon, IconCloud } from '@components';

describe('ButtonIcon', () => {
  test('should render icon', () => {
    renderWithProviders(<ButtonIcon aria-label="icon" icon={<IconCloud data-testid="cmpsr.icon-button.icon" />} />);
    screen.getByTestId('cmpsr.icon-button.icon');
  });
});
