import React from 'react';
import TestRendered from 'react-test-renderer';

import { renderWithProviders } from '@tests/renderWithProviders';
import { Slider } from './Slider';

describe('Slider', () => {
  it('Should render', () => {
    const { getByTestId } = renderWithProviders(<Slider data-testid="slider-id" />);

    getByTestId('slider-id');
  });

  it('Should render with the approriate orientation', () => {
    const horizontalInstance = TestRendered.create(<Slider />).root;
    const verticalInstance = TestRendered.create(<Slider orientation="vertical" minH={20} />).root;

    expect(horizontalInstance.findByProps({ orientation: 'horizontal' }));
    expect(verticalInstance.findByProps({ orientation: 'vertical', minH: 20 }));
  });
});
