import React from 'react';
import TestRenderer from 'react-test-renderer';
import { renderWithProviders } from 'tests/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';
import { Input } from '.';
import { ComposerProvider } from 'theme';
import { useMultiStyleConfig } from '@chakra-ui/react';

jest.mock('@chakra-ui/react', () => ({
  ...(jest.requireActual('@chakra-ui/react') as any),
  useMultiStyleConfig: jest.fn().mockReturnValue({
    element: {},
    elementContainer: {},
    inputGroup: {},
    field: { withIcon: {} },
    leftLabel: {},
    rightLabel: {},
  }),
}));

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

    expect(
      result.root.findByProps({ 'data-testid': 'cmpsr.input-icon' })
    ).toBeTruthy();
  });

  test('should not show icon when showTrailingIcon, there is an icon but there is a leftLabel', () => {
    const result = TestRenderer.create(
      <ComposerProvider>
        <Input showTrailingIcon trailingIcon={<div />} leftLabel="label" />
      </ComposerProvider>
    );

    expect(result.toJSON()[0].children[0].props.className).not.toContain(
      'chakra-input__left-element'
    );
  });

  test('should show leftLabel', () => {
    renderWithProviders(<Input leftLabel="Test111" />);
    expect(screen.queryByText('Test111')).toBeTruthy();
  });

  test('should show rightLabel', () => {
    renderWithProviders(<Input rightLabel="Test111" />);
    expect(screen.queryByText('Test111')).toBeTruthy();
  });

  test('should handle focus state', () => {
    renderWithProviders(<Input />);

    const input = screen.getByTestId('cmpsr.input');
    fireEvent.focus(input);

    expect(useMultiStyleConfig).toHaveBeenCalledWith(
      'Input',
      expect.objectContaining({
        isFocused: true,
      })
    );
  });

  test('should handle blur state', () => {
    renderWithProviders(<Input />);

    const input = screen.getByTestId('cmpsr.input');
    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(useMultiStyleConfig).toHaveBeenCalledWith(
      'Input',
      expect.objectContaining({
        isFocused: false,
      })
    );
  });

  test('should handle hovered state', () => {
    renderWithProviders(<Input />);

    const input = screen.getByTestId('cmpsr.input');
    fireEvent.mouseEnter(input);

    expect(useMultiStyleConfig).toHaveBeenCalledWith(
      'Input',
      expect.objectContaining({
        isHovered: true,
      })
    );

    fireEvent.mouseLeave(input);

    expect(useMultiStyleConfig).toHaveBeenCalledWith(
      'Input',
      expect.objectContaining({
        isHovered: false,
      })
    );
  });

  test('should handle styling when has content', () => {
    renderWithProviders(<Input />);

    const input = screen.getByTestId('cmpsr.input');
    fireEvent.input(input, { target: { value: 'test' } });

    expect(useMultiStyleConfig).toHaveBeenCalledWith(
      'Input',
      expect.objectContaining({
        hasContent: true,
      })
    );
  });
});
