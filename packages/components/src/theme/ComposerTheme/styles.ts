const baseTextStyle = {
  fontWeight: 'normal',
  color: 'text-primary',
  letterSpacing: 0,
};

const linkTextStyle = {
  ...baseTextStyle,
  color: 'text-link-accent-default',
  textDecoration: 'underline',
};

export const textStyles = {
  // Headers
  'text-header-4XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['3.75rem', '4.5rem'],
    lineHeight: ['3.75rem', '4.5rem'],
  },
  'text-header-3XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['3rem', '3.75rem'],
    lineHeight: ['3rem', '3.75rem'],
  },
  'text-header-2XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['2.25rem', '3rem'],
    lineHeight: ['2.75rem', '3rem'],
  },
  'text-header-XL': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: ['1.875rem', '2.25rem'],
    lineHeight: ['2.5rem', '2.75rem'],
  },
  'text-header-L': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1.5rem',
    lineHeight: ['2rem', '2.25rem'],
  },
  'text-header-M': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: ['2.25rem', '1.5rem'],
  },
  'text-header-S': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },
  'text-header-XS': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '0.88rem',
    lineHeight: ['1.25rem', '1.13rem'],
  },
  // Body
  'text-body-display-2XL': {
    ...baseTextStyle,
    fontSize: '3.75rem',
    lineHeight: '4.5rem',
  },
  'text-body-display-XL': {
    ...baseTextStyle,
    fontSize: '3rem',
    lineHeight: '3.5rem',
  },
  'text-body-display-L': {
    ...baseTextStyle,
    fontSize: '2.25rem',
    lineHeight: '2.75rem',
  },
  'text-body-display-M': {
    ...baseTextStyle,
    fontSize: '1.88rem',
    lineHeight: '2.25rem',
  },
  'text-body-display-S': {
    ...baseTextStyle,
    fontSize: '1.5rem',
    lineHeight: '1.88rem',
  },
  'text-body-display-XS': {
    ...baseTextStyle,
    fontSize: '1.25rem',
    lineHeight: '1.88rem',
  },
  'text-body-large-regular': {
    ...baseTextStyle,
    fontSize: '1.13rem',
    lineHeight: '1.75rem',
  },
  'text-body-large-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '1.13rem',
    lineHeight: '1.75rem',
  },
  'text-body-large-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1.13rem',
    lineHeight: '1.75rem',
  },
  'text-body-regular': {
    ...baseTextStyle,
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  'text-body-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  'text-body-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  'text-body-meta-regular': {
    ...baseTextStyle,
    fontSize: '0.88rem',
    lineHeight: '1.25rem',
  },
  'text-body-meta-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '0.88rem',
    lineHeight: '1.25rem',
  },
  'text-body-meta-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '0.88rem',
    lineHeight: '1.25rem',
  },
  'text-body-floating-label-regular': {
    ...baseTextStyle,
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
  },
  'text-body-floating-label-medium': {
    ...baseTextStyle,
    fontWeight: 'medium',
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
  },
  'text-body-floating-label-bold': {
    ...baseTextStyle,
    fontWeight: 'bold',
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
  },
  // Link
  'text-link-body-large': {
    ...linkTextStyle,
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
  },
  'text-link-body-medium': {
    ...linkTextStyle,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
  },
  'text-link-body-small': {
    ...linkTextStyle,
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },
};

export const inputStyles = {
  large: {
    borderRadius: '0.4rem',
    fontSize: 'text-body-regular',
    px: '0.8rem',
    minH: '3rem',
    minW: '8rem',
  },

  medium: {
    borderRadius: '0.4rem',
    fontSize: 'text-body-regular',
    px: '0.8rem',
    py: '0.5rem',
    minH: '2.5rem',
    minW: '8rem',
  },

  small: {
    borderRadius: '0.4rem',
    fontSize: 'text-body-meta-regular',
    px: '0.5rem',
    py: '0.375rem',
    minH: '2rem',
    minW: '8rem',
  },
};
