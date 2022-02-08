import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@tests/renderWithProviders';
import { IconButton } from '@components';
import { IconCloud } from '@components';

describe('IconButton', () => {
  test('it should render', () => {
    renderWithProviders(<IconButton aria-label="iconbutton" icon={<IconCloud />} />);
    expect(screen.queryByTestId('cmpsr.icon.button')).toBeTruthy();
  });

  test('it should render icon', () => {
    renderWithProviders(<IconButton aria-label="iconbutton" icon={<IconCloud />} />);
    expect(screen.queryByTestId('cmpsr.icon.button.icon')).toBeTruthy();
  });
});
