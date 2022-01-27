import { ComponentStyleConfig } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/theme-tools';

const $secondaryColor = cssVar('chakra-colors-text-secondary');
const $arrowBg = cssVar('popper-arrow-bg');

export const Tooltip: ComponentStyleConfig = {
  baseStyle: {
    bg: 'text-secondary',
    [$arrowBg.variable]: $secondaryColor.reference,
    padding: '0.5rem',
    color: 'text-light',
    borderRadius: '0.25rem',
    textStyle: 'text-body-meta-regular',
  },
  defaultProps: {
    side: 'top',
    positioning: 'center',
  },
};
