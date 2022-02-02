import React from 'react';
import { Tooltip, Button } from '..';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderWithProviders } from 'tests/renderWithProviders';
import { calculateTooltipPlacement } from '.';

describe('Tooltip', () => {
  test('it should render', async () => {
    renderWithProviders(
      <Tooltip label="Test!" side="bottom" positioning="center">
        <Button>Hover me!</Button>
      </Tooltip>
    );

    act(() => {
      fireEvent.mouseOver(screen.getByRole('button'));
    });

    await waitFor(() => expect(screen.queryByTestId('cmpsr.tooltip')).toBeTruthy());
  });

  test('it should render children', () => {
    renderWithProviders(
      <Tooltip label="Test!" side="bottom" positioning="center">
        <Button data-testid="test">Hover me!</Button>
      </Tooltip>
    );

    expect(screen.queryByTestId('test')).toBeTruthy();
  });

  describe('calculateTooltipPlacement', () => {
    it.each`
      side        | positioning | placement
      ${'top'}    | ${'center'} | ${'top'}
      ${'top'}    | ${'left'}   | ${'top-start'}
      ${'top'}    | ${'right'}  | ${'top-end'}
      ${'bottom'} | ${'center'} | ${'bottom'}
      ${'bottom'} | ${'left'}   | ${'bottom-start'}
      ${'bottom'} | ${'right'}  | ${'bottom-end'}
      ${'left'}   | ${'center'} | ${'left'}
      ${'left'}   | ${'left'}   | ${'left-start'}
      ${'left'}   | ${'right'}  | ${'left-end'}
      ${'right'}  | ${'center'} | ${'right'}
      ${'right'}  | ${'left'}   | ${'right-start'}
      ${'right'}  | ${'right'}  | ${'right-end'}
    `(
      'should return proper positioning when side is $side and positioning is $positioning',
      ({ side, positioning, placement }) => {
        expect(calculateTooltipPlacement(side, positioning)).toEqual(placement);
      }
    );
  });
});
