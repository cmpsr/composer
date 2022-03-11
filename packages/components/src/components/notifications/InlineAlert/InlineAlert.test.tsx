import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import '@testing-library/jest-dom';
import { InlineAlert } from './InlineAlert';

describe('InlineAlert', () => {
  const givenComponentRendered = (props) => renderWithProviders(<InlineAlert {...props} />);

  test('should render a generic message without icon', () => {
    givenComponentRendered({ message: 'Hello' });
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.queryByTestId('cmpsr.inline-alert.icon')).not.toBeInTheDocument();
  });

  test('should render a message with an icon', () => {
    givenComponentRendered({ message: 'Hello', showIcon: true });
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.getByTestId('cmpsr.inline-alert.icon')).toBeInTheDocument();
  });
});
