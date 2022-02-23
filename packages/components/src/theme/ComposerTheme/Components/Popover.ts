import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  popper: {
    background: 'background-card',
  },
  content: {
    boxShadow: 'elevation-default',
    borderRadius: 'radii-popover',
    background: 'background-card',
    border: 'none',
    py: '1rem',
    _focus: {
      boxShadow: 'elevation-default',
    },
  },
  header: {
    paddingLeft: '1rem',
    paddingRight: '3.5rem',
    paddingTop: 0,
    paddingBottom: '1rem',
    border: 'none',
  },
  body: {
    color: 'text-primary',
    paddingX: '1rem',
    paddingBottom: 0,
  },
  footer: {
    border: 'none',
    px: '1rem',
    paddingTop: '1rem',
    paddingBottom: 0,
    display: 'inline-flex',
    gap: '0.5rem',
  },
};

export const Popover: ComponentMultiStyleConfig = {
  parts: [],
  baseStyle,
};
