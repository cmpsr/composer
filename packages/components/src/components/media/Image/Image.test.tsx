import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Image } from './Image';
import { ResponsiveValue } from '@chakra-ui/styled-system';

let breakpoint = 'base';
const mockUseBreakpointValue = jest.fn().mockImplementation((value) => value[breakpoint]);
jest.mock('@chakra-ui/react', () => {
  const actual = jest.requireActual('@chakra-ui/react');
  return {
    ...actual,
    useBreakpointValue: (value: ResponsiveValue<string>) => mockUseBreakpointValue(value),
  };
});

describe('Image', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  describe('responsive src', () => {
    const src = {
      base: 'https://image.url/base',
      md: 'https://image.url/md',
    };

    it.each`
      viewport  | expected
      ${'base'} | ${src.base}
      ${'md'}   | ${src.md}
    `('should render $expected for breakpoint $viewport', ({ viewport, expected }) => {
      breakpoint = viewport;

      renderWithProviders(<Image src={src} />);

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', expected);
    });
  });
});
