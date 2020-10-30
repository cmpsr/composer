import colors from './colors';
import typography from './typography';

const theme = {
  colors,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  Button: {
    borderRadius: {
      rounded: '1.75rem',
      semiRounded: '0.5rem',
      rectangle: '0'
    }
  },
  IconicBadge: {
    height: '1.25rem',
    width: '1.25rem',
    padding: '0.15rem'
  },
  Input: {
    borderRadius: {
      rounded: '1.5rem',
      semiRounded: '0.25rem',
      rectangle: '0'
    }
  },
  Modal: {
    borderRadius: {
      rounded: '1.375rem',
      semiRounded: '0.25rem',
      rectangle: '0'
    }
  },
  NumericBadge: {
    height: '1.25rem',
    width: '1.25rem',
    padding: '0.15rem'
  },
  Typography: typography
};

export default theme;
