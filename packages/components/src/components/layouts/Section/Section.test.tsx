import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Section } from '.';

describe('Section', () => {
  const givenComponentRendered = (children: JSX.Element) => renderWithProviders(<Section>{children}</Section>);

  test('should render children', () => {
    const content = 'Composer rocks!';
    givenComponentRendered(<p>{content}</p>);
    screen.getByText(content);
  });
});
