import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Breadcrumb } from '.';
import { IconCheck, IconWorld } from '..';

describe('Breadcrumb', () => {
  const items = [
    {
      leadingIcon: IconWorld,
      trailingIcon: IconCheck,
      text: 'Composer',
      href: '#',
    },
    {
      text: 'Really',
      href: '#',
    },
    {
      text: 'Rocks!',
    },
  ];

  const givenComponentRendered = (separator: string = null) =>
    renderWithProviders(<Breadcrumb items={items} separator={separator} />);

  test('should render all items', () => {
    givenComponentRendered();
    items.forEach(({ text }) => screen.getByText(text));
  });

  test('should render custom separator', () => {
    givenComponentRendered('/');
    const separators = screen.getAllByText('/');
    expect(separators).toHaveLength(2);
  });
});
