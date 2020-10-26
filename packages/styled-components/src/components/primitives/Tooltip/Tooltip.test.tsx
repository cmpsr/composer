import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from '.';

describe('Tooltip', () => {
  const testId = 'tooltip';
  it('should render trigger', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(<Tooltip tooltip={tooltip} element={trigger} />);
    screen.getByText(trigger);
  });
  it('should render tooltip on mouse hover', async () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(<Tooltip tooltip={tooltip} element={trigger} />);
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    await waitFor(() => screen.getByText(tooltip));
  });
  it('should remove tooltip on mouse leave', () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(<Tooltip tooltip={tooltip} element={trigger} />);
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    screen.getByText(tooltip);
    fireEvent.mouseLeave(element);
    const tooltipElement = screen.queryByText(tooltip);
    expect(tooltipElement).not.toBeInTheDocument();
  });
  it('should place tooltip on top', async () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip place={Tooltip.Places.Top} tooltip={tooltip} element={trigger} />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    const tooltipElement = screen.getByTestId(testId);
    const arrow = tooltipElement.children[0];
    await waitFor(() => expect(arrow).toHaveClass('top'));
  });
  it('should place tooltip on bottom', async () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={Tooltip.Places.Bottom}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    const tooltipElement = screen.getByTestId(testId);
    const arrow = tooltipElement.children[0];
    await waitFor(() => expect(arrow).toHaveClass('bottom'));
  });
  it('should place tooltip on left', async () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={Tooltip.Places.Left}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    const tooltipElement = screen.getByTestId(testId);
    const arrow = tooltipElement.children[0];
    await waitFor(() => expect(arrow).toHaveClass('left'));
  });
  it('should place tooltip on right', async () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        place={Tooltip.Places.Right}
        tooltip={tooltip}
        element={trigger}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    const tooltipElement = screen.getByTestId(testId);
    const arrow = tooltipElement.children[0];
    await waitFor(() => expect(arrow).toHaveClass('right'));
  });
  it('should render primary100 background color', async () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        tooltip={tooltip}
        element={trigger}
        backgroundColor={Tooltip.BackgroundColors.Primary100}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    const tooltipElement = screen.getByTestId(testId);
    await waitFor(() => expect(tooltipElement).toHaveClass('primary100'));
  });
  it('should render primary900 background color', async () => {
    const trigger = 'trigger';
    const tooltip = 'tooltip';
    render(
      <Tooltip
        tooltip={tooltip}
        element={trigger}
        backgroundColor={Tooltip.BackgroundColors.Primary900}
      />
    );
    const element = screen.getByText(trigger);
    fireEvent.mouseEnter(element);
    const tooltipElement = screen.getByTestId(testId);
    await waitFor(() => expect(tooltipElement).toHaveClass('primary900'));
  });
});
