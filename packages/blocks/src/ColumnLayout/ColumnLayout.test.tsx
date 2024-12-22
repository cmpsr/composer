import React from 'react';
import { screen, renderWithProviders } from '../tests/renderWithProviders';
import { ColumnLayout } from '.';

describe('ColumnLayout', () => {
  test('should render ColumnLayout parts', () => {
    renderWithProviders(
      <ColumnLayout backgroundColor="background-overlay" p="1.5rem" gap="1.5rem">
        <ColumnLayout.Overline>Breaking news</ColumnLayout.Overline>
        <ColumnLayout.Title variant="textpairing-header-XL" textAlign="center">
          <ColumnLayout.Title.Label>The next generation of care for women and families</ColumnLayout.Title.Label>
          <ColumnLayout.Title.SubLabel color="text-secondary">
            We’re setting a new standard of care for families across geographies, cultures, and backgrounds.
          </ColumnLayout.Title.SubLabel>
        </ColumnLayout.Title>
        <ColumnLayout.ColumnsContainer
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
            <ColumnLayout.Column.Title>
              <ColumnLayout.Column.Title.Label>Composer</ColumnLayout.Column.Title.Label>
              <ColumnLayout.Column.Title.SubLabel color="text-secondary">
                the most advanced web and landing page builder for non-programmers
              </ColumnLayout.Column.Title.SubLabel>
            </ColumnLayout.Column.Title>
          </ColumnLayout.Column>
        </ColumnLayout.ColumnsContainer>
        <ColumnLayout.Actions gap="1rem" justifyContent="center" data-testid="cmpsr.block.column-layout.link-group">
          <ColumnLayout.Action variant="primary">Primary</ColumnLayout.Action>
        </ColumnLayout.Actions>
      </ColumnLayout>,
    );
    screen.getByTestId('cmpsr.block.column-layout.column-group');
    screen.getByTestId('cmpsr.block.column-layout.column');
    screen.getByText(/Breaking news/i);
    screen.getByText('The next generation of care for women and families');
    screen.getByText(
      'We’re setting a new standard of care for families across geographies, cultures, and backgrounds.',
    );
    screen.getByRole('img', { name: 'column image' });
    screen.getByText('Composer');
    screen.getByText('the most advanced web and landing page builder for non-programmers');
    screen.getByTestId('cmpsr.block.column-layout.link-group');
    screen.getByText('Primary');
  });
});
