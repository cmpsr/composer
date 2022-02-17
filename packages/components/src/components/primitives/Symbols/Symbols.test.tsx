import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { Symbols } from '.';

describe('Symbols', () => {
  it('should render', () => {
    renderWithProviders(<Symbols data-testid="cmpsr.symbols">shift</Symbols>);
    expect(screen.getByTestId('cmpsr.symbols')).toBeTruthy();
  });
});
