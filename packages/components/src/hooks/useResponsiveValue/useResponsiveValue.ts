import { ResponsiveValue, useBreakpointValue } from '@chakra-ui/react';

export const useResponsiveValue = <T extends string>(
  value: ResponsiveValue<T> | undefined,
): string | undefined =>
  value
    ? typeof value === 'string'
      ? value
      : useBreakpointValue(value, 'base')
    : undefined;
