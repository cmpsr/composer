import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ComposerProvider } from '@theme';
import { Alert } from '.';

describe('Alert', () => {
  test('should reflect the correct status (solid)', () => {
    const alertInstance = TestRenderer.create(
      <ComposerProvider>
        <Alert status="success">
          <Alert.Icon data-testid="cmpsr.alert.icon" />
        </Alert>
      </ComposerProvider>
    ).root;

    expect(alertInstance.findByProps({ 'data-testid': 'cmpsr.alert.icon' }).props.color).toBe('text-light');
  });

  test('should reflect the correct status (subtle)', () => {
    const alertInstance = TestRenderer.create(
      <ComposerProvider>
        <Alert variant="subtle" status="error">
          <Alert.Icon data-testid="cmpsr.alert.icon" />
        </Alert>
      </ComposerProvider>
    ).root;

    expect(alertInstance.findByProps({ 'data-testid': 'cmpsr.alert.icon' }).props.color).toBe('alert-error-default');
  });
});
