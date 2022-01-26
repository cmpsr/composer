import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Breadcrumb } from '.';

describe('Breadcrumb', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link href="#">Breadcrumb</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    );

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Breadcrumb/i);
  });
});
