import React from 'react';
import { TestComponent } from './TestComponent';
import { screen, render } from '@testing-library/react';

describe('TestComponent', () => {
  const givenComponentRendered = () =>
    render(<TestComponent>Hello</TestComponent>);

  test('should render', () => {
    givenComponentRendered();
  });

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText('Hello');
  });
});
