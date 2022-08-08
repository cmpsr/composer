import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { ColumnLayout } from '.';

describe('ColumnLayout', () => {
  test('should render ColumnLayout parts', () => {
    renderWithProviders(
      <ColumnLayout backgroundColor="background-overlay" p="1.5rem" gap="1.5rem">
        <ColumnLayout.TextPairing variant="textpairing-header-XL" textAlign="center">
          <ColumnLayout.TextPairing.Label>
            The next generation of care for women and families
          </ColumnLayout.TextPairing.Label>
          <ColumnLayout.TextPairing.SubLabel color="text-secondary">
            We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
          </ColumnLayout.TextPairing.SubLabel>
        </ColumnLayout.TextPairing>
        <ColumnLayout.ColumnGroup
          gap="1rem"
          justifyContent="center"
          flexWrap="wrap"
          data-testid="cmpsr.block.column-layout.column-group"
        >
          <ColumnLayout.Column variant="vertical" maxWidth="250px" data-testid="cmpsr.block.column-layout.column">
            <ColumnLayout.Column.Image
              src="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png"
              width="50px"
              alt="column image"
            />
            <ColumnLayout.Column.TextPairing>
              <ColumnLayout.Column.TextPairing.Label>Composer</ColumnLayout.Column.TextPairing.Label>
              <ColumnLayout.Column.TextPairing.SubLabel color="text-secondary">
                the most advanced web and landing page builder for non-programmers
              </ColumnLayout.Column.TextPairing.SubLabel>
            </ColumnLayout.Column.TextPairing>
          </ColumnLayout.Column>
        </ColumnLayout.ColumnGroup>
        <ColumnLayout.LinkGroup gap="1rem" justifyContent="center" data-testid="cmpsr.block.column-layout.link-group">
          <ColumnLayout.Link variant="primary">Primary</ColumnLayout.Link>
        </ColumnLayout.LinkGroup>
      </ColumnLayout>
    );
    screen.getByTestId('cmpsr.block.column-layout.column-group');
    screen.getByTestId('cmpsr.block.column-layout.column');
    screen.getByText('The next generation of care for women and families');
    screen.getByText(
      'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.'
    );
    screen.getByRole('img', { name: 'column image' });
    screen.getByText('Composer');
    screen.getByText('the most advanced web and landing page builder for non-programmers');
    screen.getByTestId('cmpsr.block.column-layout.link-group');
    screen.getByText('Primary');
  });
});
