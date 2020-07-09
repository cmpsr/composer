import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip, TooltipPlace, TOOLTIP_DEFAULT_TEST_ID } from './Tooltip';

describe('Tooltip', () => {
  it('should render anchor with data attributes', () => {
    const id = 'id';
    render(
      <Tooltip
        id={id}
        place={TooltipPlace.Top}
        tooltip={<span>Tooltip</span>}
        element={<span>Trigger</span>}
      />
    );
    const tooltip = screen.getByTestId(TOOLTIP_DEFAULT_TEST_ID);
    const anchor = tooltip.firstChild;
    expect(anchor).toHaveAttribute('data-tip');
    expect(anchor).toHaveAttribute('data-for');
    expect(anchor.getAttribute('data-for')).toEqual(id);
  });
  it('should render trigger and tooltip elements', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        id={'id'}
        place={TooltipPlace.Top}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const triggerElement = screen.getByText(trigger);
    const tooltipElement = screen.getByText(tooltip);
    expect(triggerElement).toBeInTheDocument();
    expect(tooltipElement).toBeInTheDocument();
  });
  it('should render proper placement class when top place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        id={'id'}
        place={TooltipPlace.Top}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const tooltipElement = screen.getByText(tooltip);
    expect(tooltipElement).toHaveClass('place-top');
    expect(tooltipElement).not.toHaveClass(
      'place-bottom place-left place-right'
    );
  });
  it('should render proper placement class when left place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        id={'id'}
        place={TooltipPlace.Left}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const tooltipElement = screen.getByText(tooltip);
    expect(tooltipElement).toHaveClass('place-left');
    expect(tooltipElement).not.toHaveClass(
      'place-bottom place-top place-right'
    );
  });
  it('should render proper placement class when right place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        id={'id'}
        place={TooltipPlace.Right}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const tooltipElement = screen.getByText(tooltip);
    expect(tooltipElement).toHaveClass('place-right');
    expect(tooltipElement).not.toHaveClass('place-bottom place-top place-left');
  });
  it('should render proper placement class when bottom place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        id={'id'}
        place={TooltipPlace.Bottom}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const tooltipElement = screen.getByText(tooltip);
    expect(tooltipElement).toHaveClass('place-bottom');
    expect(tooltipElement).not.toHaveClass(
      'place-bottom place-top place-right'
    );
  });
  it('should render default placement with top place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(<Tooltip id={'id'} tooltip={tooltip} element={trigger} />);
    const tooltipElement = screen.getByText(tooltip);
    expect(tooltipElement).toHaveClass('place-top');
  });
});
