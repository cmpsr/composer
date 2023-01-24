import React from 'react';
import { screen, fireEvent, renderWithProviders } from '@tests/renderWithProviders';
import { useToast } from './useToast';

const TestComponent = (props) => {
  const toast = useToast()
  return (
    <button onClick={() => toast(props)}>Toast</button>
  )
}

describe('useToast', () => {
  test('should render custom component when provided', () => {
    renderWithProviders(
      <TestComponent render={() => <div>foo</div> } />
    )
    const button = screen.getByText("Toast");
    fireEvent.click(button);
    screen.getByText('foo')
  });

  test('should render Alert by default when render is not provided', () => {
    renderWithProviders(
      <TestComponent />
    )
    const button = screen.getByText("Toast");
    fireEvent.click(button);
    screen.getByTestId('cmpsr.alert.toast');
  });
});
