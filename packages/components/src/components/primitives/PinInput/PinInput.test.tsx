import { PinInputField } from '@chakra-ui/react';
import React from 'react';
import { renderWithProviders } from 'tests/renderWithProviders';
import { PinInput } from './PinInput';

describe('Pin Input', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <PinInput>
        <PinInputField></PinInputField>
        <PinInputField></PinInputField>
        <PinInputField></PinInputField>
      </PinInput>
    );

  test('should render input child', () => {
    const { getAllByRole } = givenComponentRendered();
    expect(getAllByRole('textbox')).toHaveLength(3);
  });
});
