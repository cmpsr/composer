import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { ComposerProvider } from '../../../theme/ComposerProvider';
import { Alert } from '.';

describe('Alert', () => {
  test('should render title', () => {
    renderWithProviders(<Alert title="A title" />);
    screen.getByText(/A title/);
  });

  test('should render description', () => {
    renderWithProviders(<Alert description="A description" />);
    screen.getByText(/A description/);
  });

  test('should render both title and description', () => {
    renderWithProviders(<Alert title="A title" description="A description" />);
    screen.getByText(/A title/);
    screen.getByText(/A description/);
  });

  test('should reflect the correct state (solid)', () => {
    const alertInstance = TestRenderer.create(
      <ComposerProvider>
        <Alert state="success" />
      </ComposerProvider>
    ).root;

    expect(
      alertInstance.findByProps({ 'data-testid': 'cmpsr.alert-icon' }).props.color
    ).toBe('text-light');
  });

  test('should reflect the correct state (subtle)', () => {
    const alertInstance = TestRenderer.create(
      <ComposerProvider>
        <Alert variant="subtle" state="error" />
      </ComposerProvider>
    ).root;

    expect(
      alertInstance.findByProps({ 'data-testid': 'cmpsr.alert-icon' }).props.color
    ).toBe('alert-error-default');
  });

  test('should wrap up the subtitle if titleAligment is top', () => {
    const alertInstance = TestRenderer.create(
      <ComposerProvider>
        <Alert titleAlignment="top" variant="subtle" state="error" />
      </ComposerProvider>
    ).root;

    expect(
      alertInstance.findByProps({ 'data-testid': 'cmpsr.alert-content-wrapper' })
        .props.flexDir
    ).toBe('column');
  });

  test('should hide the title if titleAligment is none', () => {
    renderWithProviders(
      <Alert
        titleAlignment="none"
        title="A title"
        description="A description"
      />
    );
    expect(screen.queryByTestId('cmpsr.alert-title')).toBeNull();
  });
});
