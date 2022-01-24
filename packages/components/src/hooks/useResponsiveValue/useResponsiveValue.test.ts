import { ResponsiveValue } from '@chakra-ui/react';
import { useResponsiveValue } from '.';

const mockUseBreakpointValue = jest.fn();
jest.mock('@chakra-ui/react', () => {
  const actualLib = jest.requireActual('@chakra-ui/react');
  return {
    ...actualLib,
    useBreakpointValue: (p: ResponsiveValue<any>) => mockUseBreakpointValue(p),
  };
});

describe('useResponsiveValue', () => {
  test('should return undefined if no variant', () => {
    const variant = useResponsiveValue(undefined);
    expect(variant).not.toBeDefined();
  });

  test('should return same value if variant is a string', () => {
    const variant = useResponsiveValue('string');
    expect(variant).toBe('string');
  });

  test('should return responsive value if ResponsiveValue provided', () => {
    mockUseBreakpointValue.mockReturnValueOnce('md');
    const variant = useResponsiveValue({ base: 'base', md: 'md' });
    expect(variant).toBe('md');
  });
});
