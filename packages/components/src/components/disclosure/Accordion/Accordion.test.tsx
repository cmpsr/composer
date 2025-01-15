import React from 'react';
import { fireEvent, screen, renderWithProviders } from '@tests/renderWithProviders';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Accordion>
        <Accordion.Item>
          <Accordion.Button>Title 1</Accordion.Button>
          <Accordion.Panel>Panel 1</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Button>Title 2</Accordion.Button>
          <Accordion.Panel>Panel 2</Accordion.Panel>
        </Accordion.Item>
      </Accordion>,
    );

  test('should render items', () => {
    givenComponentRendered();
    screen.getByText(/Title 1/i);
    screen.getByText(/Title 2/i);
  });

  test('should render panel 1 when click on header 1', () => {
    givenComponentRendered();
    fireEvent.click(screen.getByText(/Title 1/i));
    screen.getByText(/Panel 1/i);
  });
});
