import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { Switch } from '.';

describe('Switch', () => {
  test('it should render', () => {
    renderWithProviders(<Switch />);
    expect(screen.queryByTestId('cmpsr.switch')).not.toBeFalsy();
  });

  test('it should render left label', () => {
    renderWithProviders(<Switch label="Test1" labelPosition="left" />);
    const label = screen.queryByTestId('cmpsr.switch-left-label');
    const labelText = screen.queryByText('Test1');
    expect(label).not.toBeFalsy();
    expect(labelText).not.toBeFalsy();
  });

  test('it should render right label', () => {
    renderWithProviders(<Switch label="Test1" labelPosition="right" />);
    const label = screen.queryByTestId('cmpsr.switch-right-label');
    const labelText = screen.queryByText('Test1');
    expect(label).not.toBeFalsy();
    expect(labelText).not.toBeFalsy();
  });
});
