import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Breadcrumb } from '.';

describe('Breadcrumb', () => {
  const givenComponentRendered = (separator: string = null, numOfItems = 3) => {
    const items = Array.from(Array(numOfItems).keys());
    return renderWithProviders(
      <Breadcrumb separator={separator}>
        {items.map((item) => (
          <Breadcrumb.Item key={item} data-testid="compsr.breadcrum-item" href="#">
            {`Item ${item + 1}`}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  };

  test('should render all items', () => {
    givenComponentRendered();
    const items = screen.getAllByTestId('compsr.breadcrum-item');
    expect(items).toHaveLength(3);
  });

  test('should render 2 links', () => {
    givenComponentRendered();
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  test("last item doesn't have href attribute set", () => {
    givenComponentRendered();
    const lastChild = screen.getByText('Item 3');
    expect(lastChild.getAttribute('href')).toBe(null);
  });

  test('should render custom separator', () => {
    givenComponentRendered('/');
    const separators = screen.getAllByText('/');
    expect(separators).toHaveLength(2);
  });
});
