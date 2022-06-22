import { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const messageColor = {
  success: {
    color: 'text-success',
  },
  error: {
    color: 'text-error',
  },
  warning: {
    color: 'text-warning',
  },
  info: {
    color: 'text-secondary',
  },
};

export const InlineAlert: ComponentMultiStyleConfig = {
  parts: ['container', 'description', 'icon'],
  baseStyle: ({ status, ...rest }) => {
    return {
      container: {
        alignItems: 'center',
        gap: '0.5rem',
      },
      message: {
        textStyle: 'text-body-meta-regular',
        ...messageColor[status],
      },
      icon: {
        ...rest.theme.components.Alert.baseStyle(rest).icon.status[status],
      },
    };
  },
};
