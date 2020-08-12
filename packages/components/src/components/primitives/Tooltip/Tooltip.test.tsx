import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip, TooltipPlace, TOOLTIP_DEFAULT_TEST_ID, BackgroundColor } from './Tooltip';

describe('Tooltip', () => {
  it('should render trigger', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Top}
        tooltip={tooltip}
        element={trigger}
      />
    );
    screen.getByText(trigger);
  });
  it('should render tooltip on mouse hover', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Top}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    waitFor(() => screen.getByText(tooltip));
  });
  it('should remove tooltip on mouse leave', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Top}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    waitFor(() => screen.getByText(tooltip));
    fireEvent.mouseLeave(element);
    const tooltipElement = screen.queryByText(tooltip);
    expect(tooltipElement).not.toBeInTheDocument();
  });
  it('should render proper placement class when top place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Top}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    let tooltipElement;
    waitFor(() => tooltipElement = screen.getByTestId(TOOLTIP_DEFAULT_TEST_ID));
    const arrow = tooltipElement.children[0];
    expect(arrow.getAttribute('data-placement')).toEqual('top');
  });
  it('should render proper placement class when bottom place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Bottom}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    let tooltipElement;
    waitFor(() => tooltipElement = screen.getByTestId(TOOLTIP_DEFAULT_TEST_ID));
    const arrow = tooltipElement.children[0];
    expect(arrow.getAttribute('data-placement')).toEqual('bottom');
  });
  it('should render proper placement class when left place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Left}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    let tooltipElement;
    waitFor(() => tooltipElement = screen.getByTestId(TOOLTIP_DEFAULT_TEST_ID));
    const arrow = tooltipElement.children[0];
    expect(arrow.getAttribute('data-placement')).toEqual('left');
  });
  it('should render proper placement class when right place', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Right}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    let tooltipElement;
    waitFor(() => tooltipElement = screen.getByTestId(TOOLTIP_DEFAULT_TEST_ID));
    const arrow = tooltipElement.children[0];
    expect(arrow.getAttribute('data-placement')).toEqual('right');
  });
  it('should render backgroun color', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={TooltipPlace.Right}
        tooltip={tooltip}
        element={trigger}
        backgroundColor={BackgroundColor.Primary100}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    let tooltipElement;
    waitFor(() => tooltipElement = screen.getByTestId(TOOLTIP_DEFAULT_TEST_ID));
    expect(tooltipElement).toHaveClass('bg-fill-primary-100');
  })
});