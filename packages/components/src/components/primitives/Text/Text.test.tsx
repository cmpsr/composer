import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '.';

describe('Text', () => {
  const givenComponentRendered = () => render(<Text>Hello</Text>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });
});
