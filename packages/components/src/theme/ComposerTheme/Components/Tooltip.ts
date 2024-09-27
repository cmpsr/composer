import { ComponentStyleConfig } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/theme-tools';

const $secondaryColor = cssVar('chakra-colors-text-secondary');
const $arrowBg = cssVar('popper-arrow-bg');

export const Tooltip: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    bg: 'text-secondary',
    [$arrowBg.variable]: $secondaryColor.reference,
    paddingX: 'spacer-tooltip-x',
    paddingY: 'spacer-tooltip-y',
    borderRadius: 'radii-tooltip',
    boxShadow: 'elevation-tooltip',
    ...theme.textStyles['text-body-meta-regular'],
    color: 'text-light',
  }),
};
