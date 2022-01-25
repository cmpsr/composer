import { ComponentStyleConfig } from "@chakra-ui/react";
import { PartsStyleObject, SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle = {
  fontStyle: "text-body-medium",
  // color: 'text-secondary',
  // backgroundColor: 'background-container-default',

  container: {
    bg: 'background-container-default',
    color: 'text-secondary',
    // border: 'ui-element-outline-default'
    border: '0.063rem solid var(--chakra-colors-ui-element-outline-default)',
  },
  // label: {
  //   backgroundColor: 'background-container-default',

  //   color: 'text-secondary',
  // }
}

export const Tag: ComponentStyleConfig = {
  // baseStyle: baseStyle,
  variants: {
    subtle: baseStyle
  },
  sizes: {

    s: ({ theme }) => ({
      container: {
        ...theme.textStyles['text-body-floating-label-medium'],
        padding: '0.5rem',
        borderRadius: '0.375rem'
      }
    }),

    m: ({ theme }) => ({
      container: {
        ...theme.textStyles['text-body-meta-medium'],
        padding: '0.5rem',
        borderRadius: '0.375rem'
      }
    }),

    l: ({ theme }) => ({
      container: {
        ...theme.textStyles['text-body-medium'],
        px: '0.75rem',
        py: '0.5rem',
        borderRadius: '0.375rem'
      }
    }),
  },
  defaultProps: {
    size: 'l'
  }
}