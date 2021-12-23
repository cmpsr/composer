import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Tabs>
        <Tabs.List>
          <Tabs.Item>Tab 1</Tabs.Item>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>one!</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    );

  test('should render item', () => {
    givenComponentRendered();
    screen.getByText(/Tab 1/i);
  });
  test('should render panel', () => {
    givenComponentRendered();
    screen.getByText(/one!/i);
  });
});
