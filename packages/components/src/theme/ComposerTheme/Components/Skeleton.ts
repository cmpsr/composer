import { ComponentStyleConfig, cssVar } from '@chakra-ui/react';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');
    
export const Skeleton: ComponentStyleConfig = {
  baseStyle: ({ theme }) => {
    return {
      [$startColor.variable]: theme.colors['background-skeleton-start'],
      [$endColor.variable]: theme.colors['background-skeleton-end'],
    };
  },
};
