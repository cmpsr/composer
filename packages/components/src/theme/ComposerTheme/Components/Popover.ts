import { ComponentMultiStyleConfig, cssVar } from '@chakra-ui/react';

const $arrowBg = cssVar('popper-arrow-bg');
const $backgroundCardColor = cssVar('chakra-colors-background-card');

const baseStyle = {
  popper: {
    background: 'background-card',
  },
  content: {
    boxShadow: 'elevation-default',
    borderRadius: 'radii-popover',
    [$arrowBg.variable]: $backgroundCardColor.reference,
    border: 'none',
    _focus: {
      boxShadow: 'elevation-default',
    },
  },
  header: {
    paddingLeft: '1rem',
    paddingRight: '3.5rem',
    paddingY: '1rem',
    border: 'none',
  },
  body: {
    color: 'text-primary',
    paddingX: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '1rem',
    withFooter: {
      paddingX: '1rem',
      paddingY: '0.5rem',
    },
  },
  footer: {
    border: 'none',
    padding: '1rem',
    display: 'inline-flex',
    gap: '0.5rem',
  },
  closeButton: {
    top: '1rem',
    right: '1rem',
  },
};

export const Popover: ComponentMultiStyleConfig = {
  parts: [],
  baseStyle,
  defaultProps: {
    headerProps: {
      showCloseButton: true,
    },
    showFooter: true,
  },
};
