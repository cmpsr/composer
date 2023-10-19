import { Theme } from './types';

export const theme: Theme = {
  breakpoints: { sm: '414px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px', base: '0px', xxl: '1440px' },
  colors: {
    'accent-default': '#EF8A13FF',
    'accent-hover': '#FFAD4CFF',
    'accent-pressed': '#FF8A00FF',
    'accent-disabled': '#F2CFAFFF',
    'accent-focus': '#FFFFFFFF',
    'primary-default': '#4F4FFFFF',
    'primary-hover': '#6565FFFF',
    'primary-pressed': '#2323FFFF',
    'primary-disabled': '#D2D2F0FF',
    'primary-focus': '#C2C2FFFF',
    'secondary-default': '#1D3853FF',
    'secondary-hover': '#334D68FF',
    'secondary-pressed': '#122334FF',
    'secondary-disabled': '#959DA6FF',
    'secondary-focus': '#C2C2FFFF',
    'alert-error-default': '#DB3B21FF',
    'alert-error-hover': '#F14A2FFF',
    'alert-error-pressed': '#C31B00FF',
    'alert-error-disabled': '#EDC3C3FF',
    'alert-error-focus': '#C2C2FFFF',
    'alert-warning-default': '#FC9403FF',
    'alert-warning-hover': '#FFA932FF',
    'alert-warning-pressed': '#E88700FF',
    'alert-warning-disabled': '#E3AD61FF',
    'alert-success-default': '#1AAA55FF',
    'alert-success-hover': '#1CC661FF',
    'alert-success-pressed': '#168845FF',
    'alert-success-disabled': '#6DA785FF',
    'alert-inform-default': '#1F78D1FF',
    'alert-inform-hover': '#2793FFFF',
    'alert-inform-pressed': '#1861ABFF',
    'alert-inform-disabled': '#8CB0D3FF',
    'background-light': '#FFFFFFFF',
    'background-dark': '#1B1B1BFF',
    'background-card': '#FCFCFFFF',
    'background-page': '#EDEDF4FF',
    'background-page-01': '#D9D9D9FF',
    'background-page-02': '#C1C1C1FF',
    'background-page-03': '#A0A0A0FF',
    'background-page-04': '#797979FF',
    'background-page-05': '#424242FF',
    'background-overlay': '#BCBCD7BF',
    'background-static': '#D5D5EBFF',
    'background-container-default': '#FFFFFFFF',
    'background-container-hover': '#FDFDFDFF',
    'background-container-pressed': '#E0E0E0FF',
    'background-container-disabled': '#EAEAEAFF',
    'background-container-active': '#D5D5EBFF',
    'background-action-default': '#FDFDFFFF',
    'background-action-hover': '#F5F5FFFF',
    'background-action-pressed': '#E7E7F5FF',
    'background-action-disabled': '#EAEAEAFF',
    'background-action-active': '#D5D5EBFF',
    'background-skeleton-start': '#E2E8F0FF',
    'background-skeleton-end': '#EDF2F7FF',
    'background-text-highlight': '#FFAD4CFF',
    'background-error': '#FFDDD8FF',
    'background-warning': '#FFE5C1FF',
    'background-success': '#DEFFEBFF',
    'background-inform': '#E4F2FFFF',
    'text-light': '#FFFFFFFF',
    'text-primary': '#222222FF',
    'text-primary-negative': '#FFFFFFFF',
    'text-secondary': '#7C7C7CFF',
    'text-secondary-negative': '#D6D6D6FF',
    'text-disabled': '#DBDBDBFF',
    'text-disabled-negative': '#767676FF',
    'text-button-accent': '#FFFFFFFF',
    'text-button-primary': '#FFFFFFFF',
    'text-button-secondary': '#FFFFFFFF',
    'text-button-alert': '#FFFFFFFF',
    'text-button-transparent': '#222222FF',
    'text-badge-solid': '#FFFFFFFF',
    'text-badge-outline': '#4F4FFFFF',
    'text-badge-subtle': '#4F4FFFFF',
    'text-link-accent-default': '#EF8A13FF',
    'text-link-accent-hover': '#FFAD4CFF',
    'text-link-accent-pressed': '#FF8A00FF',
    'text-link-primary-default': '#4F4FFFFF',
    'text-link-primary-hover': '#6565FFFF',
    'text-link-primary-pressed': '#2323FFFF',
    'text-link-secondary-default': '#1D3853FF',
    'text-link-secondary-hover': '#334D68FF',
    'text-link-secondary-pressed': '#122334FF',
    'text-success': '#15793EFF',
    'text-warning': '#CB7600FF',
    'text-error': '#A72D1AFF',
    'ui-element-divider': '#CACACAFF',
    'ui-element-outline-default': '#E6E6E6FF',
    'ui-element-outline-active': '#D7DBE6FF',
    'ui-element-outline-disabled': '#F2F2F2FF',
  },
  space: {
    'spacer-0': '0rem',
    'spacer-px': '0.062rem',
    'spacer-half': '0.125rem',
    'spacer-1': '0.250rem',
    'spacer-2': '0.500rem',
    'spacer-3': '0.750rem',
    'spacer-4': '1.000rem',
    'spacer-5': '1.250rem',
    'spacer-6': '1.500rem',
    'spacer-7': '1.750rem',
    'spacer-8': '2.000rem',
    'spacer-9': '2.250rem',
    'spacer-10': '2.500rem',
    'spacer-12': '3.000rem',
    'spacer-14': '3.500rem',
    'spacer-16': '4.000rem',
    'spacer-20': '5.000rem',
    'spacer-24': '6.000rem',
    'spacer-28': '7.000rem',
    'spacer-32': '8.000rem',
    'spacer-36': '9.000rem',
    'spacer-40': '10.000rem',
    'spacer-44': '11.000rem',
    'spacer-48': '12.000rem',
    'spacer-52': '13.000rem',
    'spacer-56': '14.000rem',
    'spacer-60': '15.000rem',
    'spacer-64': '16.000rem',
    'spacer-72': '18.000rem',
    'spacer-80': '20.000rem',
    'spacer-86': '24.000rem',
  },
  radii: {
    'radii-half': '0.125rem',
    'radii-1': '0.250rem',
    'radii-2': '0.375rem',
    'radii-3': '0.500rem',
    'radii-4': '0.750rem',
    'radii-5': '1.000rem',
    'radii-6': '1.500rem',
    'radii-card': '0.500rem',
    'radii-modal': '0.500rem',
    'radii-alertdialog': '0.500rem',
    'radii-popover': '0.375rem',
    'radii-button': '0.375rem',
  },
  shadows: {
    'elevation-default': '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
    'elevation-interactive': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'elevation-modals': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    'elevation-outline': '0px 0px 0px 3px rgba(194, 194, 255, 0.3)',
    'elevation-inner': 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
  },
  textStyles: {
    'text-header-4XL': {
      color: 'text-primary',
      fontSize: { lg: '4.500rem', base: '3.750rem' },
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: { lg: '4.500rem', base: '3.750rem' },
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-header-3XL': {
      color: 'text-primary',
      fontSize: { lg: '3.750rem', base: '3.000rem' },
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: { lg: '3.750rem', base: '3.000rem' },
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-header-2XL': {
      color: 'text-primary',
      fontSize: { lg: '3.000rem', base: '2.250rem' },
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: { lg: '3.000rem', base: '2.750rem' },
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-header-XL': {
      color: 'text-primary',
      fontSize: { lg: '2.250rem', base: '1.875rem' },
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: { lg: '2.750rem', base: '2.500rem' },
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-header-L': {
      color: 'text-primary',
      fontSize: '1.500rem',
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: { lg: '2.250rem', base: '2.000rem' },
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-header-M': {
      color: 'text-primary',
      fontSize: '1.250rem',
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: '1.500rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-header-S': {
      color: 'text-primary',
      fontSize: '1.000rem',
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: '1.250rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-header-XS': {
      color: 'text-primary',
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: { lg: '1.125rem', base: '1.250rem' },
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-display-2XL': {
      color: 'text-primary',
      fontSize: '3.750rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '4.500rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-display-XL': {
      color: 'text-primary',
      fontSize: '3.000rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '3.500rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-display-L': {
      color: 'text-primary',
      fontSize: '2.250rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '2.750rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-display-M': {
      color: 'text-primary',
      fontSize: '1.875rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '2.250rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-display-S': {
      color: 'text-primary',
      fontSize: '1.500rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '1.875rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-display-XS': {
      color: 'text-primary',
      fontSize: '1.250rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '1.875rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-large-regular': {
      color: 'text-primary',
      fontSize: '1.125rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '1.750rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-large-medium': {
      color: 'text-primary',
      fontSize: '1.125rem',
      fontWeight: 500,
      letterSpacing: '0rem',
      lineHeight: '1.750rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-large-bold': {
      color: 'text-primary',
      fontSize: '1.125rem',
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: '1.750rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-regular': {
      color: 'text-primary',
      fontSize: '1.000rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '1.500rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-medium': {
      color: 'text-primary',
      fontSize: '1.000rem',
      fontWeight: 500,
      letterSpacing: '0rem',
      lineHeight: '1.500rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-bold': {
      color: 'text-primary',
      fontSize: '1.000rem',
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: '1.500rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-meta-regular': {
      color: 'text-primary',
      fontSize: '0.875rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '1.250rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-meta-medium': {
      color: 'text-primary',
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0rem',
      lineHeight: '1.250rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-floating-label-regular': {
      color: 'text-primary',
      fontSize: '0.750rem',
      fontWeight: 400,
      letterSpacing: '0rem',
      lineHeight: '1.000rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-floating-label-medium': {
      color: 'text-primary',
      fontSize: '0.750rem',
      fontWeight: 500,
      letterSpacing: '0.019rem',
      lineHeight: '1.000rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-floating-label-bold': {
      color: 'text-primary',
      fontSize: '0.750rem',
      fontWeight: 700,
      letterSpacing: '0.038rem',
      lineHeight: '1.000rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-body-meta-bold': {
      color: 'text-primary',
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '0rem',
      lineHeight: '1.250rem',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
    'text-link-body-large': {
      color: 'text-link-accent-default',
      fontSize: '1.125rem',
      fontWeight: 500,
      letterSpacing: '0rem',
      lineHeight: '2.250rem',
      textDecoration: 'underline',
      fontFamily: 'Inter',
    },
    'text-link-body-medium': {
      color: 'text-link-accent-default',
      fontSize: '1.000rem',
      fontWeight: 500,
      letterSpacing: '0rem',
      lineHeight: '1.500rem',
      textDecoration: 'underline',
      fontFamily: 'Inter',
    },
    'text-link-body-small': {
      color: 'text-link-accent-default',
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '0rem',
      lineHeight: '1.250rem',
      textDecoration: 'underline',
      fontFamily: 'Inter',
    },
  },
  components: {
    TextPairing: {
      parts: ['label', 'subLabel', 'container'],
      variants: {
        'textpairing-header-4XL': {
          label: { variant: 'text-header-4XL' },
          subLabel: { variant: 'text-body-display-S' },
          columnGap: { md: '1.000rem', base: '1.250rem' },
        },
        'textpairing-header-3XL': {
          label: { variant: 'text-header-3XL' },
          subLabel: { variant: 'text-body-display-S' },
          columnGap: { md: '1.000rem', base: '1.000rem' },
        },
        'textpairing-header-2XL': {
          label: { variant: 'text-header-2XL' },
          subLabel: { variant: 'text-body-display-S' },
          columnGap: { md: '1.000rem', base: '0.750rem' },
        },
        'textpairing-header-M': {
          label: { variant: 'text-header-M' },
          subLabel: { variant: 'text-body-regular' },
          columnGap: { md: '0.250rem', base: '0.250rem' },
        },
        'textpairing-header-L': {
          label: { variant: 'text-header-L' },
          subLabel: { variant: 'text-body-regular' },
          columnGap: { md: '0.500rem', base: '0.250rem' },
        },
        'textpairing-header-XL': {
          label: { variant: 'text-header-XL' },
          subLabel: { variant: 'text-body-regular' },
          columnGap: { md: '0.500rem', base: '0.500rem' },
        },
        'textpairing-body-display-2XL': {
          label: { variant: 'text-body-display-2XL' },
          subLabel: { variant: 'text-body-large-regular' },
          columnGap: { base: '1.000rem', md: '1.000rem' },
        },
        'textpairing-body-display-XL': {
          label: { variant: 'text-body-display-XL' },
          subLabel: { variant: 'text-body-large-regular' },
          columnGap: { base: '0.750rem', md: '0.750rem' },
        },
        'textpairing-body-display-L': {
          label: { variant: 'text-body-display-L' },
          subLabel: { variant: 'text-body-large-regular' },
          columnGap: { base: '0.750rem', md: '0.750rem' },
        },
        'textpairing-body-display-M': {
          label: { variant: 'text-body-display-M' },
          subLabel: { variant: 'text-body-regular' },
          columnGap: { base: '0.500rem', md: '0.500rem' },
        },
        'textpairing-body-display-S': {
          label: { variant: 'text-body-display-S' },
          subLabel: { variant: 'text-body-regular' },
          columnGap: { base: '0.500rem', md: '0.500rem' },
        },
        'textpairing-body-bold': {
          label: { variant: 'text-body-bold' },
          subLabel: { variant: 'text-body-regular' },
          columnGap: { base: '0.250rem', md: '0.250rem' },
        },
        'textpairing-body-bold-meta': {
          label: { variant: 'text-body-bold' },
          subLabel: { variant: 'text-body-meta-regular' },
          columnGap: { base: '0.250rem', md: '0.250rem' },
        },
        'textpairing-body-meta-bold': {
          label: { variant: 'text-body-meta-bold' },
          subLabel: { variant: 'text-body-meta-regular' },
          columnGap: { base: '0.125rem', md: '0.125rem' },
        },
        'textpairing-body-medium': {
          label: { variant: 'text-body-medium' },
          subLabel: { variant: 'text-body-regular' },
          columnGap: { base: '0.250rem', md: '0.250rem' },
        },
        'textpairing-body-regular-meta': {
          label: { variant: 'text-body-regular' },
          subLabel: { variant: 'text-body-meta-regular' },
          columnGap: { base: '0.250rem', md: '0.250rem' },
        },
        'textpairing-body-medium-meta': {
          label: { variant: 'text-body-medium' },
          subLabel: { variant: 'text-body-meta-regular' },
          columnGap: { base: '0.250rem', md: '0.250rem' },
        },
        'textpairing-body-meta-medium': {
          label: { variant: 'text-body-meta-medium' },
          subLabel: { variant: 'text-body-meta-regular' },
          columnGap: { base: '0.125rem', md: '0.125rem' },
        },
        'textpairing-body-meta-regular': {
          label: { variant: 'text-body-meta-regular' },
          subLabel: { variant: 'text-body-meta-regular' },
          columnGap: { base: '0.125rem', md: '0.125rem' },
        },
      },
    },
  },
};
