import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Modal: ComponentStyleConfig = {
  baseStyle: () => {
    return {
      header: {
        padding: '1.25rem',
      },
      body: {
        padding: '1.25rem',
      },
      footer: {
        padding: '1.25rem',
      },
    };
  },
  sizes: {
    '20rem': { dialog: { maxW: '20rem' } },
    '24rem': { dialog: { maxW: '24rem' } },
    '28rem': { dialog: { maxW: '28rem' } },
    '32rem': { dialog: { maxW: '32rem' } },
    '36rem': { dialog: { maxW: '36rem' } },
    'full-width': { dialog: { maxW: '100vw', minH: '100vh', my: 0 } },
  },
};
