import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from 'tests/renderWithProviders';
import { Button } from 'components';
import { Popover } from './Popover';

describe('Popover', () => {
  it('should render', async () => {
    renderWithProviders(
      <Popover>
        <Button data-testid="cmpsr.popover.trigger">Click me</Button>
      </Popover>
    );

    fireEvent.click(screen.getByTestId('cmpsr.popover.trigger'));

    await waitFor(() => expect(screen.getByTestId('cmpsr.popover.content')).toBeTruthy());
  });

  it('should show close button if showCloseButton is true', async () => {
    renderWithProviders(
      <Popover isOpen headerProps={{ showCloseButton: true }}>
        <Button>Click me</Button>
      </Popover>
    );

    await waitFor(() => expect(screen.getByTestId('cmpsr.popover.close.button')).toBeTruthy());
  });

  it('should hide the footer if showFooter is false', async () => {
    renderWithProviders(
      <Popover isOpen showFooter={false}>
        <Button>Click me</Button>
      </Popover>
    );

    await waitFor(() => expect(screen.queryByTestId('cmpsr.popover.footer')).toBeFalsy());
  });

  it('should show the label', async () => {
    renderWithProviders(
      <Popover isOpen headerProps={{ label: 'Test1111' }}>
        <Button>Click me</Button>
      </Popover>
    );

    await waitFor(() => expect(screen.getByTestId('cmpsr.popover.label').textContent).toContain('Test1111'));
  });

  it('should show the subtitle', async () => {
    renderWithProviders(
      <Popover isOpen headerProps={{ title: 'Test1111', subtitle: 'Test2222' }}>
        <Button>Click me</Button>
      </Popover>
    );

    await waitFor(() => expect(screen.getByText('Test2222')).toBeTruthy());
  });

  it('should show the primary action', async () => {
    renderWithProviders(
      <Popover isOpen showFooter footerProps={{ primaryAction: { label: 'Primary action' } }}>
        <Button>Click me</Button>
      </Popover>
    );

    await waitFor(() => expect(screen.getByTestId('cmpsr.popover.primary.action')).toBeTruthy());
  });

  it('should show the secondary action', async () => {
    renderWithProviders(
      <Popover isOpen showFooter footerProps={{ secondaryAction: { label: 'Secondary action' } }}>
        <Button>Click me</Button>
      </Popover>
    );

    await waitFor(() => expect(screen.getByTestId('cmpsr.popover.secondary.action')).toBeTruthy());
  });

  it('should execute the primary action', async () => {
    const actionMock = jest.fn();
    renderWithProviders(
      <Popover isOpen showFooter footerProps={{ primaryAction: { label: 'Primary action', onClick: actionMock } }}>
        <Button>Click me</Button>
      </Popover>
    );

    fireEvent.click(screen.getByTestId('cmpsr.popover.primary.action'));

    await waitFor(() => expect(actionMock).toBeCalled());
  });

  it('should execute the secondary action', async () => {
    const actionMock = jest.fn();
    renderWithProviders(
      <Popover isOpen showFooter footerProps={{ secondaryAction: { label: 'Secondary action', onClick: actionMock } }}>
        <Button>Click me</Button>
      </Popover>
    );

    fireEvent.click(screen.getByTestId('cmpsr.popover.secondary.action'));

    await waitFor(() => expect(actionMock).toBeCalled());
  });
});
