import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Carousel: ComponentStyleConfig = {
  baseStyle: {
    buttonStyles: {
      width: '24px',
      height: '24px',
      backgroundColor: 'transparent',
      _disabled: { backgroundColor: 'transparent' },
      _hover: { svg: { color: 'text-link-primary-hover' } },
      _active: { svg: { color: 'text-link-primary-pressed' } },
      _focus: { backgroundColor: 'transparent', boxShadow: 'none' },
    },
    chevronStyles: {
      width: '100%',
      height: '100%',
      color: 'text-link-primary-default',
    },
    dotStyles: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'primary-disabled',
      _disabled: { background: 'primary-default' },
    },
  },
};
