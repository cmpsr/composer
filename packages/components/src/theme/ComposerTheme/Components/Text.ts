import { ComponentStyleConfig } from '@chakra-ui/theme';

export const textVariants = [
  'text-header-4XL',
  'text-header-3XL',
  'text-header-2XL',
  'text-header-XL',
  'text-header-L',
  'text-header-M',
  'text-header-S',
  'text-header-XS',
  'text-body-display-2XL',
  'text-body-display-XL',
  'text-body-display-L',
  'text-body-display-M',
  'text-body-display-S',
  'text-body-display-XS',
  'text-body-large-regular',
  'text-body-large-medium',
  'text-body-large-bold',
  'text-body-regular',
  'text-body-medium',
  'text-body-bold',
  'text-body-meta-regular',
  'text-body-meta-medium',
  'text-body-meta-bold',
  'text-body-floating-label-regular',
  'text-body-floating-label-medium',
  'text-body-floating-label-bold',
  'text-link-body-large',
  'text-link-body-medium',
  'text-link-body-small',
] as const;

const variants = textVariants.reduce(
  (acc, v) => ({
    [v]: {
      textStyle: v,
    },
    ...acc,
  }),
  {},
);

export const Text: ComponentStyleConfig = {
  variants,
  defaultProps: {
    variant: 'text-body-regular',
  },
};
