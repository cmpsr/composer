import { ComponentStyleConfig, cssVar } from '@chakra-ui/react';

export const Skeleton: ComponentStyleConfig = {
  baseStyle: ({ theme }) => {
    const $startColor = cssVar('skeleton-start-color');
    const $endColor = cssVar('skeleton-end-color');
    return {
      [$startColor.variable]: theme.colors['background-skeleton-start'],
      [$endColor.variable]: theme.colors['background-skeleton-end'],
    };
  },
};
