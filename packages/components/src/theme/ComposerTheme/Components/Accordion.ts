import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Accordion: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    icon: {
      ...theme.components.Icon.sizes.l,
      color: 'text-primary',
    },
    button: {
      px: '1rem',
      py: '0.5rem',
    },
    panel: {
      padding: '1rem',
      textStyle: 'text-body-regular',
    },
  }),
};
