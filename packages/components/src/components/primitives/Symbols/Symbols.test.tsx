import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'tests/renderWithProviders';
import { Symbols } from '..';

describe('Symbols', () => {
  it('should render', () => {
    renderWithProviders(<Symbols data-testid="cmpsr.symbols">shift</Symbols>);
    expect(screen.getByTestId('cmpsr.symbols')).toBeTruthy();
  });
});
