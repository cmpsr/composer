import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Input } from '.';
import { ComposerProvider } from '@theme';

describe('Input', () => {
  test('it should render', () => {
    renderWithProviders(<Input />);
    expect(screen.queryByTestId('cmpsr.input-group')).toBeTruthy();
  });

  test('it should show icon when showTrailingIcon is true and there is an icon', () => {
    const result = TestRenderer.create(
      <ComposerProvider>
        <Input showTrailingIcon trailingIcon={<div />} />
      </ComposerProvider>
    );

    expect(result.root.findByProps({ 'data-testid': 'cmpsr.input-icon' })).toBeTruthy();
  });

  test('should not show icon when showTrailingIcon, there is an icon but there is a leftLabel', () => {
    const result = TestRenderer.create(
      <ComposerProvider>
        <Input showTrailingIcon trailingIcon={<div />} leftLabel="label" />
      </ComposerProvider>
    );

    expect(result.toJSON()[0].children[0].props.className).not.toContain('chakra-input__left-element');
  });

  test('should show leftLabel', () => {
    renderWithProviders(<Input leftLabel="Test111" />);
    expect(screen.queryByText('Test111')).toBeTruthy();
  });

  test('should show rightLabel', () => {
    renderWithProviders(<Input rightLabel="Test111" />);
    expect(screen.queryByText('Test111')).toBeTruthy();
  });
});
