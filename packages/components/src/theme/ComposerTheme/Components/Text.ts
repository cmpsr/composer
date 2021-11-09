import { ComponentStyleConfig } from '@chakra-ui/theme';

export const textVariants = [
  'font-header-4XL',
  'font-header-3XL',
  'font-header-2XL',
  'font-header-XL',
  'font-header-L',
  'font-header-M',
  'font-header-S',
  'font-header-XS',
  'font-body-display-2XL',
  'font-body-display-XL',
  'font-body-display-L',
  'font-body-display-M',
  'font-body-display-S',
  'font-body-display-XS',
  'font-body-large-regular',
  'font-body-large-medium',
  'font-body-large-bold',
  'font-body-regular',
  'font-body-medium',
  'font-body-bold',
  'font-body-meta-regular',
  'font-body-meta-medium',
  'font-body-meta-bold',
  'font-body-floating-label-regular',
  'font-body-floating-label-medium',
  'font-body-floating-label-bold',
  'font-link-body-large',
  'font-link-body-medium',
  'font-link-body-small',
];

const variants = textVariants.reduce(
  (acc, v) => ({
    [v]: {
      textStyle: v,
    },
    ...acc,
  }),
  {}
);

export const Text: ComponentStyleConfig = {
  variants,
};
