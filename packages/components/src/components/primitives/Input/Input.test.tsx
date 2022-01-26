import React from 'react';
import TestRenderer from 'react-test-renderer';
import { renderWithProviders } from 'tests/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';
import { Input } from '.';
import { ComposerProvider } from 'theme';
import { useMultiStyleConfig } from '@chakra-ui/react';
import {
  flushedStyle,
  getIconStyle,
  getInputGroupStyle,
  getLabelStyle,
  iconStyles,
  inputGroupStyles,
  labelStyles,
} from 'theme/ComposerTheme/Components/Input';

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

const mockFlushedStyle = {
  inputGroup: {
    borderRadius: 0,
    ...getInputGroupStyle({}, 'flushed'),
  },
  leftLabel: {
    ...labelStyles,
    ...getLabelStyle({}, 'flushed'),
  },
  rightLabel: {
    ...labelStyles,
    ...getLabelStyle({}, 'flushed'),
  },
  element: {
    color: 'text-secondary',
    ...getIconStyle({}),
  },
  elementContainer: {
    height: '100%',
  },
  field: {
    color: 'text-primary',
    backgroundColor: 'background-action-default',
    border: 'none',
    borderColor: 'ui-element-outline-default',
    borderRadius: 0,
    _placeholder: {
      color: 'text-secondary',
      textStyle: 'text-body-regular',
    },
    _hover: {
      backgroundColor: 'background-action-hover',
      border: 'none',
      borderBottom:
        '0.063rem solid var(--chakra-colors-ui-element-outline-active)',
    },
    _focus: {
      boxShadow: 'none',
      border: 'none',
      borderBottom:
        'solid 0.063rem var(--chakra-colors-ui-element-outline-default)',
      borderColor: 'ui-element-outline-default',
    },
    _invalid: {
      boxShadow: 'none',
      border: 'none',
      borderColor: 'transparent',
    },
    _disabled: {
      _placeholder: {
        color: 'text-disabled',
      },
      color: 'text-secondary',
      backgroundColor: 'background-action-disabled',
      border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-disabled)',
    },
  },
};

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

  describe('Input theme methods', () => {
    describe('getInputGroupStyle', () => {
      it.each`
        isInvalid | isFocused | expected
        ${false}  | ${false}  | ${{}}
        ${true}   | ${false}  | ${inputGroupStyles.outline.invalid}
        ${false}  | ${true}   | ${inputGroupStyles.outline.focused}
      `(
        'should return proper style when isInvalid is $isInvalid and $isFocused is $isFocused',
        async ({ isInvalid, isFocused, expected }) => {
          expect(getInputGroupStyle({ isInvalid, isFocused })).toEqual(
            expected
          );
        }
      );
    });
    describe('getLabelStyle', () => {
      it.each`
        isInvalid | isDisabled | isHovered | expected
        ${false}  | ${false}   | ${false}  | ${{}}
        ${true}   | ${false}   | ${false}  | ${labelStyles.variants.outline.invalid}
        ${false}  | ${true}    | ${false}  | ${labelStyles.variants.outline.disabled}
        ${false}  | ${false}   | ${true}   | ${labelStyles.variants.outline.hovered}
      `(
        'should return proper style when isInvalid is $isInvalid, $isDisabled is $isDisabled and isHovered is $isHovered',
        async ({ isInvalid, isDisabled, isHovered, expected }) => {
          expect(getLabelStyle({ isInvalid, isDisabled, isHovered })).toEqual(
            expected
          );
        }
      );
    });
    describe('getIconStyle', () => {
      it.each`
        isDisabled | hasContent | expected
        ${false}   | ${false}   | ${{}}
        ${true}    | ${false}   | ${iconStyles.disabled}
        ${false}   | ${true}    | ${iconStyles.withContent}
      `(
        'should return proper style when isDisabled is $isDisabled and $hasContent is $hasContent',
        async ({ isDisabled, hasContent, expected }) => {
          expect(getIconStyle({ isDisabled, hasContent })).toEqual(expected);
        }
      );
    });
    test('should return proper flushed style', () => {
      const result = flushedStyle({});
      expect(result).toEqual(mockFlushedStyle);
    });
  });
});
