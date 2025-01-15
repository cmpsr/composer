import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Breadcrumb } from '.';

describe('Breadcrumb', () => {
  const givenComponentRendered = (separator: string = undefined, numOfItems = 3) => {
    const items = Array.from(Array(numOfItems).keys());
    return renderWithProviders(
      <Breadcrumb separator={separator}>
        {items.map((item) => (
          <Breadcrumb.Item key={item} testId="cmpsr.breadcrumb.item" href="#">
            {`Item ${item + 1}`}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>,
    );
  };

  test('should render all items', () => {
    givenComponentRendered();
    const items = screen.getAllByTestId('cmpsr.breadcrumb.item');
    expect(items).toHaveLength(3);
  });

  test('should render 2 links', () => {
    givenComponentRendered();
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  test('last item should not be a link', () => {
    givenComponentRendered();
    const items = screen.getAllByTestId('cmpsr.breadcrumb.item');
    const lastChild = items[2];
    expect(lastChild.children[0].getAttribute('href')).toBe(null);
  });
});
