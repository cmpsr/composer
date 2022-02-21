import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@tests/renderWithProviders';
import { IconButton, IconCloud } from '@components';
import '@testing-library/jest-dom';

describe('IconButton', () => {
  test('should render', () => {
    renderWithProviders(<IconButton aria-label="icon button" icon={<IconCloud />} />);
    screen.getByTestId('cmpsr.icon-button');
  });

  test('should render icon', () => {
    renderWithProviders(<IconButton aria-label="icon" icon={<IconCloud data-testid="cmpsr.icon-button.icon" />} />);
    screen.getByTestId('cmpsr.icon-button.icon');
  });

  test('should not render spinner if no isLoading', () => {
    renderWithProviders(<IconButton aria-label="icon button" icon={<IconCloud />} />);
    expect(screen.queryByTestId('cmpsr.icon-button.spinner')).not.toBeInTheDocument();
  });

  test('should render spinner if isLoading', () => {
    renderWithProviders(<IconButton aria-label="icon button" icon={<IconCloud />} isLoading />);
    expect(screen.getByTestId('cmpsr.icon-button.spinner')).toBeVisible();
  });
});
