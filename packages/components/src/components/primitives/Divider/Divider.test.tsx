import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import TestRendered from 'react-test-renderer';
import { Divider } from './Divider';

describe('Divider', () => {
  it('Should render', () => {
    renderWithProviders(<Divider role="divider" />);

    screen.getByRole('divider');
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
