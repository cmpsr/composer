import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { IconExternalLink } from '..';
import { Button } from './Button';

describe('Button', () => {
  const givenComponentRendered = () => renderWithProviders(<Button>Hello</Button>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });

  test('should render spinner if loading', () => {
    renderWithProviders(<Button isLoading>Hello</Button>);
    expect(screen.queryByTestId('cmpsr.button.spinner')).not.toBeFalsy();
  });

  test('should render trailing icon', () => {
    renderWithProviders(<Button trailingIcon={IconExternalLink}>Hello</Button>);
    expect(screen.queryByTestId('cmpsr.button.icon.trailing')).not.toBeFalsy();
  });

  test('should render leading icon', () => {
    renderWithProviders(<Button leadingIcon={IconExternalLink}>Hello</Button>);
    expect(screen.queryByTestId('cmpsr.button.icon.leading')).not.toBeFalsy();
  });
});
