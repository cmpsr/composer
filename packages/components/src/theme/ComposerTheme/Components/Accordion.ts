import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Accordion: ComponentStyleConfig = {
  baseStyle: {
    panel: {
      textStyle: 'text-body-regular',
    },
  },
  variants: {
    highlight: {
      button: {
        _expanded: {
          background: 'background-action-active',
        },
      },
    },
  },
};
