import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import '@testing-library/jest-dom';
import { InlineAlert } from './InlineAlert';

interface RendererProps {
  message: string;
  showIcon?: boolean;
}

describe('InlineAlert', () => {
  const givenComponentRendered = ({ message, showIcon = false }: RendererProps) =>
    renderWithProviders(
      <InlineAlert>
        {showIcon && <InlineAlert.Icon />}
        <InlineAlert.Message>{message}</InlineAlert.Message>
      </InlineAlert>,
    );

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
