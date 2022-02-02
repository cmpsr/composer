import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'tests/renderWithProviders';
import { Button } from 'components';
import { Popover } from './Popover';

const mockFn = jest.fn();

describe('Popover', () => {
  beforeEach(() => {
    mockFn.mockClear();
  });

  it('should render', () => {
    renderWithProviders(
      <Popover>
        <Button data-testid="cmpsr.popover.trigger">Click me</Button>
      </Popover>
    );

    fireEvent.click(screen.getByTestId('cmpsr.popover.trigger'));
    expect(screen.getByTestId('cmpsr.popover.content')).toBeTruthy();
  });

  it('should show close button if showCloseButton is true', () => {
    renderWithProviders(
      <Popover isOpen headerProps={{ showCloseButton: true }}>
        <Button>Click me</Button>
      </Popover>
    );

    expect(screen.getByTestId('cmpsr.popover.close.button')).toBeTruthy();
  });

  it('should hide the footer if footerProps is falsy', () => {
    renderWithProviders(
      <Popover isOpen footerProps={null}>
        <Button>Click me</Button>
      </Popover>
    );

    expect(screen.queryByTestId('cmpsr.popover.footer')).toBeFalsy();
  });

  it('should show the label', () => {
    renderWithProviders(
      <Popover isOpen headerProps={{ label: 'Test1111' }}>
        <Button>Click me</Button>
      </Popover>
    );

    expect(screen.getByTestId('cmpsr.popover.label').textContent).toContain('Test1111');
  });

  it('should show the subtitle', () => {
    renderWithProviders(
      <Popover isOpen headerProps={{ title: 'Test1111', subtitle: 'Test2222' }}>
        <Button>Click me</Button>
      </Popover>
    );

    expect(screen.getByText('Test2222')).toBeTruthy();
  });

  it('should show the primary action', () => {
    renderWithProviders(
      <Popover isOpen footerProps={{ primaryAction: { label: 'Primary action', onClick: mockFn } }}>
        <Button>Click me</Button>
      </Popover>
    );

    expect(screen.getByTestId('cmpsr.popover.primary.action')).toBeTruthy();
  });

  it('should show the secondary action', () => {
    renderWithProviders(
      <Popover isOpen footerProps={{ secondaryAction: { label: 'Secondary action', onClick: mockFn } }}>
        <Button>Click me</Button>
      </Popover>
    );

    expect(screen.getByTestId('cmpsr.popover.secondary.action')).toBeTruthy();
  });

  it('should execute the primary action', () => {
    renderWithProviders(
      <Popover isOpen footerProps={{ primaryAction: { label: 'Primary action', onClick: mockFn } }}>
        <Button>Click me</Button>
      </Popover>
    );

    fireEvent.click(screen.getByTestId('cmpsr.popover.primary.action'));

    expect(mockFn).toBeCalled();
  });

  it('should execute the secondary action', () => {
    renderWithProviders(
      <Popover isOpen footerProps={{ secondaryAction: { label: 'Secondary action', onClick: mockFn } }}>
        <Button>Click me</Button>
      </Popover>
    );

    fireEvent.click(screen.getByTestId('cmpsr.popover.secondary.action'));

    expect(mockFn).toBeCalled();
  });
});
