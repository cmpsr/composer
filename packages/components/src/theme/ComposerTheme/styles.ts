const baseTextStyle = {
  fontFamily: 'Inter',
  fontWeight: 'normal',
  color: 'text-primary',
  letterSpacing: 0,
};

const linkTextStyle = {
  ...baseTextStyle,
  color: 'text-link-accent-ui-default',
  textDecorationLine: 'underline',
};

export const textStyles = {
  // Headers
  'font-header-4XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['3.75rem', '4.5rem'],
    lineHeight: ['3.75rem', '4.5rem'],
  },
  'font-header-3XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['3rem', '3.75rem'],
    lineHeight: ['3rem', '3.75rem'],
  },
  'font-header-2XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['2.25rem', '3rem'],
    lineHeight: ['2.75rem', '3rem'],
  },
  'font-header-XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['1.875rem', '2.25rem'],
    lineHeight: ['2.5rem', '2.75rem'],
  },
  'font-header-L': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    lineHeight: ['2rem', '2.25rem'],
  },
  'font-header-M': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: ['2.25rem', '1.5rem'],
  },
  'font-header-S': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },
  'font-header-XS': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '0.88rem',
    lineHeight: ['1.25rem', '1.13rem'],
  },
  // Body
  'font-body-display-2XL': {
    ...baseTextStyle,
    fontSize: '3.75rem',
    lineHeight: '4.5rem',
  },
  'font-body-display-XL': {
    ...baseTextStyle,
    fontSize: '3rem',
    lineHeight: '3.5rem',
  },
  'font-body-display-L': {
    ...baseTextStyle,
    fontSize: '2.25rem',
    lineHeight: '2.75rem',
  },
  'font-body-display-M': {
    ...baseTextStyle,
    fontSize: '1.88rem',
    lineHeight: '2.25rem',
  },
  'font-body-display-S': {
    ...baseTextStyle,
    fontSize: '1.5rem',
    lineHeight: '1.88rem',
  },
  'font-body-display-XS': {
    ...baseTextStyle,
    fontSize: '1.25rem',
    lineHeight: '1.88rem',
  },
  'font-body-large-regular': {
    ...baseTextStyle,
    fontSize: '1.13rem',
    lineHeight: '1.75rem',
  },
  'font-body-large-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '1.13rem',
    lineHeight: '1.75rem',
  },
  'font-body-large-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1.13rem',
    lineHeight: '1.75rem',
  },
  'font-body-regular': {
    ...baseTextStyle,
    fontSize: '1rem',
    lineHeight: '1.15rem',
  },
  'font-body-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '1rem',
    lineHeight: '1.15rem',
  },
  'font-body-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.15rem',
  },
  'font-body-meta-regular': {
    ...baseTextStyle,
    fontSize: '0.88rem',
    lineHeight: '1.25rem',
  },
  'font-body-meta-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '0.88rem',
    lineHeight: '1.25rem',
  },
  'font-body-meta-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '0.88rem',
    lineHeight: '1.25rem',
  },
  'font-body-floating-label-regular': {
    ...baseTextStyle,
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
  },
  'font-body-floating-label-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
  },
  'font-body-floating-label-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
  },
  // Link
  'font-link-body-large': {
    ...linkTextStyle,
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
  },
  'font-link-body-medium': {
    ...linkTextStyle,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
  },
  'font-link-body-small': {
    ...linkTextStyle,
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },
};
