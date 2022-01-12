import React from 'react';
import { renderWithProviders } from 'tests/renderWithProviders';
import TestRendered from 'react-test-renderer';
import { Divider } from './Divider';

describe('Divider', () => {
  it('Should render', () => {
    const { getByTestId } = renderWithProviders(
      <Divider data-testid="divider-id" />
    );

    getByTestId('divider-id');
  });

  test('should render with orientation', () => {
    const horizontalInstance = TestRendered.create(
      <Divider orientation="horizontal" />
    ).root;
    const verticalInstance = TestRendered.create(
      <Divider orientation="vertical" />
    ).root;

    expect(horizontalInstance.findByProps({ orientation: 'horizontal' }));
    expect(verticalInstance.findByProps({ orientation: 'vertical' }));
  });
});
