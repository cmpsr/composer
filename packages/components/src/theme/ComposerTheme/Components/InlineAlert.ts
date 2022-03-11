import { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const messageStylesByStatus = {
  success: {
    textStyle: 'body-meta-regular',
    color: 'text-success',
  },
  error: {
    textStyle: 'body-meta-regular',
    color: 'text-error',
  },
  warning: {
    textStyle: 'body-meta-regular',
    color: 'text-warning',
  },
  info: {
    textStyle: 'body-meta-regular',
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
        ...messageStylesByStatus[status],
      },
      icon: {
        ...rest.theme.components.Alert.baseStyle(rest).icon.status[status],
      },
    };
  },
};
